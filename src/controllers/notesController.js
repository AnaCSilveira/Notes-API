const knex = require("../database/knex");

class NotesController {
  async creat(request, response) {
    const { title, description, tags, links } = request.body;
    console.log(request.body);
    const user_id = request.user.id;

    const [note_id] = await knex("notes").insert({
      title,
      description,
      user_id,
    });

    const linksInsert = links.map((link) => {
      return {
        note_id,
        url: link,
      };
    });
    await knex("links").insert(linksInsert);

    const tagsInsert = tags.map((name) => {
      return {
        note_id,
        name,
        user_id,
      };
    });
    await knex("tags").insert(tagsInsert);
    return response.json();
  }
}

module.exports = NotesController;

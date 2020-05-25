import React from 'react';
import AddNote from './AddNote';
import NotesContext from '../NotesContext';

class TestComponent extends React.Component {
    static contextType = NotesContext;

    render() {
        const contextValue = {
            folders: [
                {
                  "id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Important"
                },
                {
                  "id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Super"
                },
                {
                  "id": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Spangley"
                }
              ],
          notes: [
                {
                  "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Dogs",
                  "modified": "2019-01-03T00:00:00.000Z",
                  "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "content": "Minus sapiente totam et. At cum quia modi sed nobis. Dolorem asperiores sint quis maxime non minus est eius dolorum. Nobis ad quisquam aut quisquam. Consequatur consequatur cumque deserunt explicabo quas ratione consequuntur. Sint quia est et rerum qui inventore quas molestiae doloribus.\n \rEarum placeat qui commodi minima. Unde ducimus sapiente quae. Quod aut assumenda beatae nobis. Quia omnis voluptatem aliquam cupiditate. Nemo repellendus quisquam voluptatem iure quod. Ducimus quaerat esse.\n \rQui accusamus perferendis porro. Quasi et itaque qui non dolores nisi ut excepturi sed. Soluta nihil dicta consequatur maiores rerum ut. Consequuntur voluptas laboriosam officiis. Consequatur voluptas quia a qui."
                },
                {
                  "id": "d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Cats",
                  "modified": "2018-08-15T23:00:00.000Z",
                  "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "content": "Quaerat officiis enim laboriosam est natus libero non. Ea odit quam rerum. Amet est fuga. Aut aut ut reprehenderit vero in laudantium.\n \rSed nostrum quia harum distinctio fugiat accusamus earum iusto blanditiis. Culpa consectetur quia aperiam voluptatem id autem voluptatem. Voluptas reiciendis nisi nihil architecto rerum voluptas voluptates. Aliquid quis illum perferendis. Ipsum modi qui vero id.\n \rQuod culpa illo. Sed nihil natus. Itaque perferendis nihil facilis eaque ut et aut."
                },
                {
                  "id": "d26e01a6-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Pigs",
                  "modified": "2018-03-01T00:00:00.000Z",
                  "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "content": "Necessitatibus reiciendis deleniti omnis. Nostrum hic culpa quisquam. Rerum at quis cum. Distinctio quis culpa sequi totam et voluptas itaque autem.\n \rReprehenderit consequatur eveniet omnis quae velit exercitationem. Qui blanditiis harum perferendis. Illo ut qui voluptas quibusdam doloremque. Harum expedita dolor maxime culpa modi ut atque qui ipsa. Dolores velit eum voluptatum cupiditate non odit suscipit aut cupiditate.\n \rAut voluptas iure ut. Labore minima iure eos adipisci quisquam voluptatem. Consequuntur modi earum veritatis ratione delectus."
                },
                {
                  "id": "d26e0570-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Birds",
                  "modified": "2019-01-04T00:00:00.000Z",
                  "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "content": "Id temporibus repellendus ducimus quis. Ipsa laboriosam laborum est ut voluptate. Nulla expedita quam provident et aliquid qui. Nemo possimus est. Aut rerum non hic. Quisquam totam ratione aliquam aut architecto veritatis hic voluptatem.\n \rEveniet autem ut quia labore non adipisci. Id temporibus ut id sunt in. Sint quibusdam fugiat qui ipsum voluptas et magni. Voluptatem voluptatibus et magni animi nisi dolor. Eius natus voluptate. Iure pariatur aut voluptatibus aliquam.\n \rIste quis corrupti nihil. Magni nihil sapiente molestiae alias fuga labore. Enim et est omnis voluptas dolor. Corrupti est veniam dolor quia ea ab quis. Molestias earum occaecati eligendi qui numquam aspernatur."
                },
                {
                  "id": "d26e0714-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Bears",
                  "modified": "2018-07-12T23:00:00.000Z",
                  "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "content": "Vitae eligendi aperiam quia et non ad provident esse. Id neque eum recusandae velit ut est. Et consectetur esse qui quo repellendus molestiae eum ut. Quia laboriosam nam voluptatum enim temporibus expedita culpa ea. Facilis sint numquam distinctio laborum doloribus esse.\n \rMinus autem perferendis adipisci necessitatibus. Provident ut ipsam inventore non ullam rerum voluptate velit. Ut nihil fugiat beatae magnam itaque. Quis adipisci illum iure facere qui cum omnis nesciunt voluptatem. Tempora rerum magnam ea doloremque minima eos doloribus. Ipsam autem reiciendis eos harum earum a.\n \rNecessitatibus non dolores. Velit corrupti repellat autem necessitatibus. Possimus laboriosam mollitia ab. Qui dicta dicta voluptatem."
                },
                {
                  "id": "d26e0854-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Horses",
                  "modified": "2018-08-20T23:00:00.000Z",
                  "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "content": "Aut nam iste et non a voluptates et autem ut. Et cum maxime quos sint pariatur eius. Unde voluptatem maxime architecto qui. Velit rerum aliquid voluptatem veritatis veniam.\n \rVoluptatibus veritatis officia natus vel quas. Voluptates quaerat laborum sit a. Et aliquam odio quos odit quis ut. Et natus qui veniam magnam maxime velit pariatur. Voluptates in nesciunt.\n \rMagnam asperiores voluptatem est aut dolores. Quasi reprehenderit ut. Aliquam quasi est natus. Et aliquid iusto et quos. Enim voluptates et."
                },
                {
                  "id": "d26e0980-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Tigers",
                  "modified": "2018-03-03T00:00:00.000Z",
                  "folderId": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "content": "Possimus officiis ut molestiae quis aut quia quibusdam. Necessitatibus sed dolorem aliquam omnis. Aliquid voluptatem recusandae. Deleniti maxime pariatur iusto ipsam ut dolor id. Qui non itaque aut non modi et temporibus quia. Molestias temporibus voluptatem vel.\n \rMinus voluptas nemo et labore id cum. Ad est et dolores quas rem debitis enim labore. Praesentium quia qui ipsum impedit. Corporis placeat est qui velit.\n \rAut suscipit molestias recusandae eos ad consequatur libero dolor. Voluptates cupiditate alias aut voluptatem. Est voluptatum molestiae voluptas hic eos et a nihil."
                },
                {
                  "id": "d26e0aac-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Wolves",
                  "modified": "2018-05-16T23:00:00.000Z",
                  "folderId": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "content": "Et ut et. Rerum deleniti itaque. Qui vel et. Dolores et aliquam explicabo quisquam. Temporibus nemo occaecati rerum libero.\n \rIncidunt voluptate atque impedit ratione ex veniam. Ut enim excepturi. Voluptatem temporibus aliquam officiis non voluptate dolorum sint.\n \rQuasi tempore dolor modi aut veniam deserunt magni qui. Quae cupiditate ipsum. Labore vitae consequuntur autem commodi tenetur consequatur qui ea est. Et id dolorem. Quae vel molestias laboriosam."
                },
                {
                  "id": "d26e0bce-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Elephants",
                  "modified": "2018-04-11T23:00:00.000Z",
                  "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "content": "Eum enim consequatur corrupti. Non fugit aut in. Molestiae laboriosam qui repellendus nobis quidem itaque beatae.\n \rTempore et et quidem dolorem enim qui id maxime. Recusandae consequuntur explicabo laboriosam est illo modi totam placeat sed. Doloribus voluptas quisquam assumenda perspiciatis sed illum labore voluptas ut. Cumque facilis tempore nemo.\n \rMagni facilis doloremque quia expedita facere consequatur. A iure pariatur quae id consequatur. Incidunt magni quas dolorum quia rem possimus voluptatem possimus. Et consequatur aut inventore sit odio cupiditate sunt. Et quod in vel reiciendis aperiam dolores incidunt et."
                },
                {
                  "id": "d26e0f48-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Lions",
                  "modified": "2018-04-26T23:00:00.000Z",
                  "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "content": "Eveniet quos possimus. Dignissimos expedita accusamus qui consequuntur autem possimus doloribus. Aut sequi deserunt non ea delectus sed tempore et vitae. Quod recusandae dolorum voluptate nesciunt.\n \rIllo nesciunt nostrum incidunt. Illo non qui quam est debitis ipsum dolores dignissimos perferendis. Ut sit libero possimus et aut animi provident.\n \rTempora sit nemo animi. Exercitationem sed beatae et maiores natus. Qui voluptate eos. Id repellat incidunt soluta odit aliquid. Perferendis necessitatibus quo et itaque cumque optio laborum facere. Necessitatibus ea odio rerum consequuntur deleniti iusto aut officiis."
                },
                {
                  "id": "d26e1074-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Monkeys",
                  "modified": "2018-02-05T00:00:00.000Z",
                  "folderId": "b07162f0-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "content": "Voluptas debitis aut repudiandae et aliquam iure eos. Quo officia temporibus aut necessitatibus commodi reprehenderit nemo libero dolores. Ut cumque recusandae et velit quia sunt at voluptatem facilis. Dolores beatae hic natus et corporis totam qui. Ea inventore aut reprehenderit quis. Autem quo soluta et.\n \rDignissimos omnis qui laborum enim consequatur cum alias et. Et est quisquam quia debitis id. Fugiat recusandae qui voluptatem molestiae ratione et esse laboriosam nostrum.\n \rDolorum accusamus velit. Eos magnam consequatur dignissimos nobis delectus ipsa. Dignissimos esse facilis provident optio veritatis eligendi porro vero."
                },
                {
                  "id": "d26e11a0-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Bats",
                  "modified": "2018-12-01T00:00:00.000Z",
                  "folderId": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "content": "Ipsum porro impedit temporibus non et animi. Cum architecto quis explicabo. Autem optio ipsam omnis omnis sit possimus.\n \rQui sed non fuga est dicta doloribus ea consequatur nesciunt. Id laudantium sint qui molestias. Quis assumenda ut voluptatibus maiores quis animi.\n \rTempora delectus tempora repellat assumenda eum magnam facilis. Ut aut deleniti modi explicabo nam labore. Reprehenderit et sed odio maiores reiciendis et modi molestias animi."
                },
                {
                  "id": "d26e12c2-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Turtles",
                  "modified": "2018-09-11T23:00:00.000Z",
                  "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "content": "Excepturi dolores et totam numquam. Praesentium itaque occaecati ea. Maiores non quaerat.\n \rEos itaque placeat. Commodi quia minus atque rerum dolorum. Laboriosam praesentium asperiores ipsam cupiditate ipsa. Consequatur qui ducimus omnis dolorem. Asperiores eum consequatur natus ab minus voluptatem ab.\n \rVoluptates est a. Vel eos quam ab sit velit corrupti saepe. Numquam blanditiis excepturi accusantium laboriosam et sint. Cum delectus voluptatem ipsam."
                },
                {
                  "id": "d26e1452-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "name": "Zebras",
                  "modified": "2018-08-13T23:00:00.000Z",
                  "folderId": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
                  "content": "Molestiae iste laboriosam eos reprehenderit neque dolorum. Illo ea neque. Labore nesciunt eos id velit quo eos.\n \rRatione modi et omnis est dolor architecto ad alias. Adipisci expedita alias eos eveniet rerum. Distinctio nihil aut nisi voluptas amet commodi repudiandae. Maiores id quo.\n \rQuisquam ex commodi natus incidunt aspernatur quia. Vel excepturi ex possimus qui. Nulla magnam dicta blanditiis asperiores odio quam perspiciatis vitae. Perferendis dolore ipsa. Quo beatae blanditiis aut cumque. Libero placeat ratione eos voluptatum eum aut."
                }
              ],
          folderError: null,
          noteError: null,
          deleteNote: () => {},
          addFolder: () => {},
          addNote: () => {},
        };

        return (
            <NotesContext.Provider
                value={contextValue}
            >
                <AddNote />
            </NotesContext.Provider>
        );
    }

}

export default TestComponent;
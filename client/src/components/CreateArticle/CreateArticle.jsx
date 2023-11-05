import './CreateArticle.css';

function CreateArticle() {
    

    return (
        <div className="create-article">
            <h2>Create an Article</h2>
            <form >
                <div className="form-group">
                    <label>Title:</label>
                    <input type="text" name="title"  />
                </div>
                <div className="form-group">
                    <label>Subtitle:</label>
                    <input type="text" name="subtitle" />
                </div>
                <div className="form-group">
                    <label>Content:</label>
                    <textarea name="content"  />
                </div>
                <div className="form-group">
                    <label>Author:</label>
                    <input type="text" name="author"  />
                </div>
                <div className="form-group">
                    <label>Tags (comma separated):</label>
                    <input type="text" name="tags"  />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
    }

export default CreateArticle;

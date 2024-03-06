CREATE TABLE tasks (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE,
    priority VARCHAR(50),
    status VARCHAR(50)
);

CREATE TABLE subtasks (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    task_id UUID REFERENCES tasks(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50)
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE task_tags (
    task_id UUID REFERENCES tasks(id),
    tag_id UUID REFERENCES tags(id),
    PRIMARY KEY (task_id, tag_id)
);

CREATE TABLE task_categories (
    task_id UUID REFERENCES tasks(id),
    category_id UUID REFERENCES categories(id),
    PRIMARY KEY (task_id, category_id)
);
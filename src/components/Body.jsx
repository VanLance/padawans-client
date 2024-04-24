import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Sidebar from "./Sidebar";
import PostForm from "./forms/PostForm";

export default function Body({ sidebar, children, user }) {
  return (
    <Container>
      <Stack direction="horizontal">
        {sidebar && <Sidebar />}
        <div className="flex-center">
          {sidebar && <PostForm user={user}/>}
          {children}
        </div>
      </Stack>
    </Container>
  )
}

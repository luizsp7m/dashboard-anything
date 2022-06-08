import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react"
import { Layout } from "../../components/Layout";
import { BackButton } from "../../components/BackButton";
import { ProjectForm } from "../../components/Form/ProjectForm";

export default function Create() {
  return (
    <Layout title="Adicionar projeto">
      <BackButton destination="/projects" />
      <ProjectForm />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
    },
  }
}
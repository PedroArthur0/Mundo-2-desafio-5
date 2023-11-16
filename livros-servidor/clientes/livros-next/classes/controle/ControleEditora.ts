import Editora from "../modelo/Editora";

const editoras: Editora[] = [
  {
    codEditora: 1,
    nome: "No Starch Press",
    autor: "Marijn Haverbeke",
  },
  {
    codEditora: 2,
    nome: "Alta Books",
    autor: "Robert C. Martin",
  },
  {
    codEditora: 3,
    nome: "Novatec",
    autor: "Maurício Samy Silva",
  },
];

export class ControleEditora {
  public getEditoras = (): Editora[] => {
    return editoras;
  };

  public getNomeEditora = (codEditora: number): string => {
    const editoraEncontrada = editoras.find(
      (editora) => editora.codEditora === codEditora
    );
    if (editoraEncontrada) {
      return editoraEncontrada.nome;
    } else {
      throw new Error("Editora não encontrada");
    }
  };

  public getEditora = (codEditora: number): Editora | undefined => {
    return editoras.find((editora) => editora.codEditora === codEditora);
  };
}

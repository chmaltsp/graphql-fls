import { gql } from 'apollo-server-express';

export const autoCiteTypes = gql`
  type Author {
    """
    given name(s) of author
    """
    given: String
    """
    family name of author
    """
    family: String
  }

  type DateParts {
    dateParts: [Int]
  }
  type Csl {
    type: String
    """
    content (article) title
    """
    title: String
    """
    medium (web page) title
    """
    titleShort: String
    publisher: String
    author: [Author]
    """
    issued
    """
    issued: DateParts
    """
    accessed
    """
    accessed: DateParts
    """
    URL of the cited content
    """
    URL: String
    """
    (only for journal citations) volume number
    """
    volume: String
    """
    (only for journal citations) issue number
    """
    issue: String
    """
    (only for journal citations) page(s) (n-n)
    """
    page: String
    """
    (only for journal citations) locators(s) (n-n)
    """
    locator: String
    """
    (only for journal citations) database source of the journal
    """
    source: String
  }
  type CslResult {
    csl: Csl
  }

  type AutociteResult {
    results: [CslResult]
  }
`;

import { Select } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { GET_KEYWORDS } from "../utils/queries";

const SectionKeyword2 = ({ selectedSection }) => {
  //Hooks
  const { loading, data } = useQuery(GET_KEYWORDS, {
    fetchPolicy: "no-cache",
  });

  const keywordList = data?.keyword || [];
  console.log(keywordList);

  const keywordOptions = keywordList.map((keyword) => (
    <option key={keyword._id} value={keyword.keyword}>
      {keyword.keyword}
    </option>
  ));

  const handleSectionChange = (e) => {
    const selectedVal = e.target.value;
    //setSelectedKeyword(selectedVal);
    console.log(selectedVal);
    console.log(selectedSection);
  };

  return (
    <>
      <h2 className="sectionText">Select a Keyword</h2>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Select
       
          borderColor="grey"
          className="placeholderText"
          placeholder="Select keyword"
          onChange={handleSectionChange}
        >
          {keywordOptions}
        </Select>
      )}
    </>
  );
};

export default SectionKeyword2;

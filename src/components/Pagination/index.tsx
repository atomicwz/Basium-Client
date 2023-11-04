import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useCheckSexSelected } from "@/context";

interface IProps {
    prev: () => void;
    next: () => void;
    page: number;
    disableNextButton: boolean;
}

const Pagination: React.FC<IProps> = ({
    prev,
    next,
    page,
    disableNextButton,
}) => {
    const { sexSelected } = useCheckSexSelected();
    return (
        <Flex gap={3} justifyContent="center" alignItems="center" my={10}>
            <Button
                onClick={prev}
                bg="transparent"
                isDisabled={page === 1}
                color={sexSelected === "masculine" ? "white" : "primary.400"}
                _hover={{
                    bg: "transparent",
                    color:
                        sexSelected === "masculine"
                            ? "primary.400"
                            : "secondary.900",
                }}
            >
                <BsFillArrowLeftCircleFill size={25} />
            </Button>
            <Text color={sexSelected === "masculine" ? "white" : "primary.400"}>
                {page}
            </Text>
            <Button
                isDisabled={disableNextButton}
                bg="transparent"
                onClick={next}
                color={sexSelected === "masculine" ? "white" : "primary.400"}
                _hover={{
                    bg: "transparent",
                    color:
                        sexSelected === "masculine"
                            ? "primary.400"
                            : "secondary.900",
                }}
            >
                <BsFillArrowRightCircleFill size={25} />
            </Button>
        </Flex>
    );
};

export default Pagination;

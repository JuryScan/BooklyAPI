import models from "../models/index.js"

const Gender = models.gender

const getAllGender = async (req, res) => {
    try{
        const gender = await Review.findAll();
        if(!gender || gender.lengh == 0){
            return res.status(404).jason({message: "Nenhum genero encontrado"});
        }

        res.status(200).json({message: "Gênero encontrado com sucesso", data: gender});

    } catch (error) {
        res.status(500).json({message: "Erro ao buscar gênero", error: error.message});
    }
};

const getGenderById = async (req, res) => {
    try { const {id} = req.params;
    const gender = await Gender.findByPk(id);
    if(!gender){
        return res.status(404).json({message: "Gênero não encontrado"})
    }

    res.status(200).json({message: "Gênero encontrado com sucesso", data: gender});

    } catch(error) {
        res.status(500).json({message: "Erro ao encontrar gênero", error: error.message})
    }
}
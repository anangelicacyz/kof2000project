import React from 'react'
import kofHeroes from '../data'
import { useParams } from 'react-router-dom'



const HeroDetails = () => {
    
const {heroName} =useParams()    

const hero = kofHeroes.find(heroe => heroe.name === heroName)
const movedetail= hero.moves
const imageUrl= './../'+ hero.image
    return (
        <div className= 'herodetails'>
            <div className='container'>
                <div>
                <p className='heroName'>{hero.name}</p>
                    <img src= {imageUrl}/>
                    
                </div>
                <div>
                    <table className='heroDescription'>
                        <tr>
                            <td>Team: </td>
                            <td>{hero.team}</td>

                        </tr>
                        <tr>
                            <td>Lugar de nacimiento: </td>
                            <td>{hero.description.birthplace}</td>
                        </tr>
                        <tr>
                            <td>Fecha de nacimiento: </td>
                            <td>{hero.description.Birthday}</td>
                        </tr>
                        <tr>
                            <td>Peso y estatura: </td>
                            <td>{hero.description.heigthWeight}</td>
                        </tr>
                        <tr>
                            <td>Estilo de pelea: </td>
                            <td>{hero.description.figthStyle}</td>
                        </tr>
                    
                    </table>
                    <table className='heroMoves'>
                        <thead>
                            <th>
                                Moves
                            </th>
                        </thead>
                            <tbody>
                            {movedetail.releases.map(move => {
                                return (
                                    <tr>
                                        <td>{move.name}</td>
                                        <td>{move.instructions}</td>
                                    </tr>
                                )})}
                            <tr className='subtitleMovesTable'>
                                <td>Extramoves</td>
                            </tr>
                            {movedetail.extramoves.map(move => {
                                return (
                                    <tr>
                                        <td>{move.name}</td>
                                        <td>{move.instructions}</td>
                                    </tr>
                                )})}
                            <tr className='subtitleMovesTable'>
                                <td>Desperation Moves</td>
                            </tr>
                            {movedetail.desperationMoves.map(move =>{
                                return (
                                    <tr>
                                        <td>{move.name}</td>
                                        <td>{move.instructions}</td>
                                    </tr>
                                )})}
                            <tr className='subtitleMovesTable'>
                                <td>Super desperation moves</td>
                            </tr>
                            {movedetail.superDesperationMoves.map(move => {
                                return (
                                    <tr>
                                        <td>{move.name}</td>
                                        <td>{move.instructions}</td>
                                    </tr>
                                )})}
                            <tr className='subtitleMovesTable'>
                                <td>Max super desperation moves</td>
                            </tr>
                            {movedetail.maxSuperdesperationMoves.map(move =>{
                                return (
                                    <tr>
                                        <td>{move.name}</td>
                                        <td>{move.instructions}</td>
                                    </tr>
                                )})}
                            <tr className='subtitleMovesTable'>
                                <td>Striker move</td>
                            </tr>
                            {movedetail.strikerMove.map(move =>{
                                return (
                                    <tr>
                                        <td>{move.name}</td>
                                        <td>{move.instructions}</td>
                                    </tr>
                                )})}
                            <tr className='subtitleMovesTable'>
                                <td>Extra strike move</td>
                            </tr>
                            {movedetail.extraStrikeMove.map(move => {
                                return (
                                    <tr>
                                        <td>{move.name}</td>
                                        <td>{move.instructions}</td>
                                    </tr>
                                )
                            })} 
                            </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default HeroDetails
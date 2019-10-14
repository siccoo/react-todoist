import {useState, useEffect} from 'react';
import {firebase} from '../firebase';

const collatedTasks = () => {}

export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([
        // users, setUsers
        // client, setClient
        // shoes, setShoes
    ]);

    useEffect(() => {
        let unsubscribe = firebase
        .firestore().collection().where('userId', '==', 'jFyKWUiivyasdf123Ytv')

        unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ?
        (unsubscribe = unsubscribe.where('projectId', '==', selectedProject)) 
        : selectedProject === 'TODAY'
        ? (unsubscribe = unsubscribe.where(
            'date', 
            '==', 
            moment().format('DD/MM/YYYY')
            )) : selectedProject === 'INBOX' || selectedProject === 0
    }, [])
}
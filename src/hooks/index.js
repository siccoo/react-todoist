import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

const collatedTasks = () => { }

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
                    ? (unsubscribe = unsubscribe.where('date', '==', ''))
                    : unsubscribe;

        unsubscribe = unsubscribe.onSnapshot(snapshot => {
            const newTasks = snapshot.docs.map(task => ({
                id: task.id,
                ...task.data(),
            }));

            setTasks(
                selectedProject === 'NEXT_7'
                    ? newTasks.filter(
                        task => moment(task.date, 'DD-MM-YYYY')
                            .diff(moment(), 'days') <= 7 &&
                            task.archived !== true
                    )
                    : newTasks.filter(task => task.archived !== true)
            )
        })
    }, [selectedProject]);
};
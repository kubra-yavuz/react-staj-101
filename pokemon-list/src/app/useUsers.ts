import { useQuery } from "@tanstack/react-query"

type User = {
    id: string;
    name: string;
}

export const useUsers = () => {

    return useQuery<User[]>({
        queryKey: ['usersKey'],
        queryFn: () =>
          fetch('https://localhost:3001/users').then((res) =>
            res.json(),
          ),
      })


}
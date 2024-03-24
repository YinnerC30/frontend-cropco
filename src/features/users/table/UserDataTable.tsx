import { useAppSelector } from '@/app/hooks';
import { DataTable } from '@/components/table/DataTable';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { SearchBar } from '@/components/form/SearchBar';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { getUsers } from '@/services/cropcoAPI';
import {
  ExclamationTriangleIcon,
  PlusIcon,
  ReloadIcon,
} from '@radix-ui/react-icons';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { columns } from './ColumnsUser';
import { Loading } from '@/components/common/Loading';
import { ErrorLoading } from '@/components/common/ErrorLoading';

export const UserDataTable = () => {
  const parameter = useAppSelector(state => state.usersModule.searchParameter);

  const navigate = useNavigate();

  const {
    isLoading,
    data = [],
    isError,
  } = useQuery({
    queryKey: ['users', parameter],
    queryFn: () => getUsers({ parameter }),
  });

  if (isLoading) return <Loading />;

  if (isError) {
    return <ErrorLoading />;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex flex-row items-center ">
          <SearchBar />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="ml-8 bg-blue-600 rounded-full hover:bg-blue-400 "
                  onClick={() => navigate('../create')}
                >
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Crear</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="container py-2">
          <DataTable columns={columns} data={data}></DataTable>
        </div>
      </div>
    </>
  );
};

Задача №2

1. git checkout feature/add-ant-design
   git rebase -i HEAD~3

   edit 91e7052 install ant design
   edit 19523d4 add support alias path
   pick 69a8ad8 add antd theme

   В package.json удаляем "@types/node": "20.1.3"
   git add .
   git commit --amend
   git rebase --continue
   На следующем коммите добавляем в package.json строку "@types/node": "20.1.3"	
   git add .
   git commit --amend
   git rebase --continue
2. Запоминаем хэш коммита add support alias path (28745f5)
   переходим на ветку development 
   git checkout development 
   git cherry-pick 28745f5
3. git checkout feature/add-ant-design
   git rebase development
4. git merge feature/add-ant-design

Задача №3		

   git checkout feature/core
   git rebase development
   git checkout development
   git merge feature/core

   git checkout feature/calculator
   git rebase development
   git checkout development
   git merge feature/calculator

   git checkout feature/calculator-actions
   git rebase development
   git checkout development
   git merge feature/calculator-actions

   При возникновении конфликтов устраням

   Задача №4
   
   Копируем файлы из задания в папку patches
   
   git checkout development 
   git apply ./patches/patch_2.diff
   git apply ./patches/patch_3.diff
   git apply ./patches/patch_1.diff
   git add .
   git commit -m 'feat:changes from patches'

5. Производим rebase коммитов согласно conventional commits, после чего производим заливку в main
   
   git rebase -i HEAD~14
   git rebase main
   git checkout main
   git merge development

6.Создаём репозиторий на GitHub и добавляем удаленный репозиторий

   git remote add origin https://github.com/paha1985/calc.git
   git push --all

import { Routes } from '@angular/router';

import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('./perfil/perfil.page').then((m) => m.PerfilPage),
  },
  {
    path: 'logout',
    loadComponent: () =>
      import('./logout/logout.page').then((m) => m.LogoutPage),
  },
  {
    path: 'cadastrouser',
    loadComponent: () =>
      import('./cadastrouser/cadastrouser.page').then(
        (m) => m.CadastrouserPage,
      ),
  },
  {
    path: 'estoque',
    loadComponent: () =>
      import('./estoque/estoque.page').then((m) => m.EstoquePage),
  },
  {
    path: 'pedidos',
    loadComponent: () =>
      import('./pedidos/pedidos.page').then((m) => m.PedidosPage),
  },
  {
    path: 'vendas',
    loadComponent: () =>
      import('./vendas/vendas.page').then((m) => m.VendasPage),
  },
  {
    path: 'clientes',
    loadComponent: () =>
      import('./clientes/clientes.page').then((m) => m.ClientesPage),
  },
  {
    path: 'alteracliente/:id',
    loadComponent: () =>
      import('./alteracliente/alteracliente.page').then(
        (m) => m.AlteraclientePage,
      ),
  },
  {
    path: 'cadastrocliente',
    loadComponent: () =>
      import('./cadastrocliente/cadastrocliente.page').then(
        (m) => m.CadastroclientePage,
      ),
  },
  {
    path: 'cadastrovenda',
    loadComponent: () =>
      import('./cadastrovenda/cadastrovenda.page').then(
        (m) => m.CadastrovendaPage,
      ),
  },
  {
    path: 'cadastropedido',
    loadComponent: () =>
      import('./cadastropedido/cadastropedido.page').then(
        (m) => m.CadastropedidoPage,
      ),
  },
  {
    path: 'cadastroproduto',
    loadComponent: () =>
      import('./cadastroproduto/cadastroproduto.page').then(
        (m) => m.CadastroprodutoPage,
      ),
  },
  {
    path: 'alteraproduto',
    loadComponent: () =>
      import('./alteraproduto/alteraproduto.page').then(
        (m) => m.AlteraprodutoPage,
      ),
  },
];

import React from "react";

const SECURITY_CODE = 'asd'

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loading: false,
      value: '',
      success: false
    };
  }

  // UNSAFE_componentWillMount() { // inicio que se monta
  //   console.log('1')
  // }

  // UNSAFE_componentDidMount() { // Se esta montando
  //   console.log('2')
  // }

  // UNSAFE_componentWillUnmount() { // Se esta desmontando
  //   console.log('3')
  // }

  componentDidUpdate() { // Cuando se renderiza de nuevo

    if (!!this.state.loading) {
      setTimeout(() => {
        if (SECURITY_CODE === this.state.value) {
          this.setState({ success: true})
        } else {
          this.setState({ error: true})
        }
        this.setState({ loading: false })
      }, 2000)
    }

  }

  render() {
    const { error, value, loading, success } = this.state
    const { name } = this.props
    return (
      <div className="grid place-content-center bg-slate-800 dark:bg-slate-300 p-6 gap-3 w-screen transition-colors">
        <div className="text-slate-100 dark:text-slate-800">
          <h2 className="text-xl font-medium">Eliminar {name}</h2>
          {!loading && (
            <p className="font-light">
              Por favor escribe el codigo de Seguridad
            </p>
          )}
          {loading && <p className="font-light">Cargando...</p>}{" "}
        </div>

        <div className="flex justify-center">
          <input
            placeholder="Codigo de seguridad"
            className="bg-slate-100 w-56 rounded-l-lg py-1 px-4 focus:outline-none"
            value={value}
            onChange={(e) => this.setState({ value: e.target.value})}
          />
          <button
            className="bg-slate-300 dark:bg-slate-800 rounded-r-lg py-1 px-4 text-slate-800 dark:text-slate-100"
            // onClick={() => this.setState({error: !this.state.error})}
            onClick={() =>  this.setState({ loading: true, error: false, success: false }) }
          >
            Comprobar
          </button>
        </div>

        <div className="relative">
          {error && (
            <p className="font-medium absolute left-0 right-0 text-slate-300 dark:text-slate-800">
              The code is wrong
            </p>
          )}
          {success && (
            <p className="font-medium absolute left-0 right-0 text-slate-300 dark:text-slate-800">
              Success
            </p>
          )}
        </div>
      </div>
    );
  }
}

export { ClassState };

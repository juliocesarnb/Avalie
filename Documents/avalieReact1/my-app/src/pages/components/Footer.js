import styled from 'styled-components';

const StyledDivFontPrincipal = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`;
const StyledDivFontSecundaria = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`;
const Footer = () => {
    return (
        <footer className="bg-purple-500 h-96">
            <img class="mb-12 pt-12 ml-32" src="/assets/Logo-Avalie.svg" alt="Logo da empresa" width={150} height={150} />

            <div class="flex justify-center items-center gap-56">

                <div class="">
                    <StyledDivFontPrincipal><h3 class="text-3xl mb-11">Quer saber mais?</h3>  </StyledDivFontPrincipal>
                    <StyledDivFontSecundaria>
                        <p class="mb-11">Ajude-nos a conhecer sua escola e entender <br></br> como podemos construir um caso de sucesso!</p>
                    </StyledDivFontSecundaria>
                    <form>
                        <div class="flex items-center justify-center w-10/12">
                            <div class="rounded-lg bg-white p-2  w-full">
                                <div class="flex">

                                    {/* input */}
                                    <input type="text" class="caret-black w-full bg-white pl-1 text-black font-semibold outline-0" placeholder="" id="" />

                                    {/* botão */}
                                    <input type="button" value="Enviar" class="cursor-pointer ml-12 rounded-lg bg-orange-500 p-1 pl-6 pr-6
                                    w-36 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors" />
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
                <div class="mb-16 flex justify-center flex-col">
                    <StyledDivFontSecundaria>
                        <div class="mb-2 text-xl">Informações</div>
                        </StyledDivFontSecundaria>
                            <div class="mb-2 text-gray-200">Quem somos</div>
                            <div class="mb-2 text-gray-200">Soluções</div>
                            <div class="text-gray-200">Produtos</div>
                        </div>
                        <div class="mb-12 flex justify-center  flex-col">
                        <StyledDivFontSecundaria>
                            <div class="text-xl mb-1">Contatos</div>
                            
                            <div class="mb-2 text-gray-200">+55 85 9999-9999</div>
                            <div class="mb-2 text-gray-200">Instagram</div>
                            <div class="mb-2 text-gray-200">Facebook</div>
                            <div class="text-gray-200">WhatsApp</div>
                            </StyledDivFontSecundaria>
                        </div>
                </div>
        </footer>
    );
};

export default Footer;
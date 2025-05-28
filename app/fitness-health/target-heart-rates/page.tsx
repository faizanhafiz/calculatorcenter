import { Metadata } from 'next';
import HeartRateCalculator from './HeartRateCalculator'; // Adjust path if needed
import HeartRateStaticContent from './HeartRateStaticContent'; // Adjust path if needed
import AdsSection from '@/components/TopAd';
import SideAdSection from '@/components/SideAdSection'; // Import the SideAdSection for desktop sidebar

export const metadata: Metadata = {
  title: 'Heart Rate Calculator - Optimize Your Workouts | Zenicalculator',
  description: 'Calculate your maximum heart rate and target heart rate zones for moderate and vigorous intensity workouts. Improve your fitness and cardiovascular health.',
  keywords: [
    'abnormal heartbeat',
    'Heart Rate Calculator',
    'Target Heart Rate',
    'Max Heart Rate',
    'Fitness Zones',
    'Cardio Health',
    'Workout Zones',
    
  ],
  openGraph: {
    title: 'Heart Rate Calculator - Zenicalculator ',
    description: 'Calculate your maximum heart rate and target heart rate zones for moderate and vigorous intensity workouts.',
    url: 'https://zenicalculator.com/fitness-health/heart-rate-calculator', // Update URL
    siteName: 'zenicalculator',
    images: [
      {
        url: 'hdata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAABZVBMVEUzMzP///8fKTPy8/X1+Prk5+syQEsAAAC45v0uLi75+fotLS0lJSUqKiq05f38/PweHh5Vw/cAABYbJTAjIyMbGxq4uLj29vYADh4AABMVISwZGRnc3NzGxsY6Ojru7/EAFSNVVVV3d3eRkZFubW2gn6BeXl4blNIQHSmvr6+Dg4Pi5erR0dKlpaXY295GRkVwcHCYmJgQEA/s+P67v8M4RU8gIyqxtbiQ1/vL7P160Pjg8/7Iy89MRlFlam9UWl8bd6h4f4UqMzug3fwaLjslNUJFUFhbZWxuUVpgTVYcXoIAAAkeO00ah74eRFsba5VDotcdUG1Yq9tyt96i0Oqy2OyFweN8veLkqK7UbXfNR1jvz9P14OLou8A7lLtsipcwc5BVcYCahHiJr8qPr7xmyfi3zNliW1MqIhc5IABTn8PStbT/6diyoqI5r+Cgl5Pgo8NCXVu62tKgzL6stujY3PWKW2L+I1SLAAAc7klEQVR4nO2di2PaVpbGIZKMJSQLJyCcIKGg10RCD4SVKDaKXeLUadrpTB9pd3dmdmZ2d9p9zj5mZ+fv33OuEAgbCUHcoSQ9rWNAV0L6cc797jn3ItdqP9ncWL4nOApXLzI3fPrgHrFdn+mPx1h+HOhyITJRmT6+/2RG7SdsqTXb44HJFDLrShePT+bMfsJGTGh1LFstZKbar09Ontxbsl2f8s5NaLUNiSpkxniXDx8/unfTdn3WuzW+0yqTADl8uorZB40NZVN3C5HVXefl/Xx39hM2YNYeB2GxbNZBNk8KmX2g2FA2vWLZpKKL+zcl4IPHJrR65bJ5eXKysjv7gLGBbI6kbiEzxru+v1oCPlxsIAFsuWwe3H9c0p19iNiAWa1MNpMy2fxAsbHtXr9MNqM1son2rPXs2YeEjchmMbNufPFZBWavPv38Z5/muO36qn5YE1pjo1w2P1snAc+etX4OzMA+b30Q2IROSyuRTdl8ulY2gdkvfkmYoX383mNLZVMsZObrL9fKJnRnX/5yRuyLL774WT5Kd319P4QBs355tnlvrWw+a9378qMZs6+++Pqbt18vRemuL/HODWQzMIslgIu0R+uHGs/ufZox+/rt27fffPsFefzqPcXWbPdKs814fbb54MnJ42efZt3Zt198+/brL2ZPPlq02vWF3qFVkM112eajxw8PdD/+DLF99TdfvX377VcZwI++fPYeDkCAmRaVZE5mUcExz+yza3OIrZ+8Ak5vv/726xmyz3/5i87SaPe9wMbyHZDNEgmoIJuPTu6/jjNXvRh/jkKQMfv5cobwXmBj+XGpbCbTtRKA3dlFlJtPiD7LOrfPP/24dRPZ/mODzKlcNkdP1kvA/XvTZDm86fs/J93Zp69WMttvbE2cpyuVzbUFxweP779c5aoXvY8++vJeEbM9xia0WpZUIpur5+mW7NHj+wehv3L36ZNnt7qz/ccmdDraVvN0S8yuveHK3Yfm9ZrA3kNsIJtCuWzee7hGNh88Onm4kM1l8/WP1+0Oqvtw1xQ2szWyKSrO42qySa/cP5k+qbD7/QuJ2zWIDYwsbykpOEYgAWsvGmVz5e40qfGWuxns/mhKPH3XLKqa0O6VyaYa317ecuuiQQIKXBV2X1sXf/D44Usn233XOCoZWd5SLJtV5ulAAp4WyCbjXZ6s3/3h0/x0xK6JrDe+095ueUv+ok+uCwojvlkJ+fWN6YhdQym3Kstb1unek5OTTDZvVsghWa0gm/cvb9dVdg2mxFA2wxJmSjXdm85lU106WIVkFZB/dhGtmo7YNZsiw2yzbJ4uwnm68msmupfJJlX3pXiOja6wOgZ2fzItGiDuGs9KE1rjNctb7q/PNrHgON/DtRPFn3WQRHXX776Qzb3AdgfLW1A2zSxzElUljuc5Aey+sWzuA7a+hvN0p6f1v/272+zI8pbyi4bM6eRyLpucCshsTkyn/vxw/dQoIL8smY74kWJrS3BSk7PJYf1Xv/r18qlWk83Hi2xT7CZhBB9Cir9CjfcBqm5J7/Djxda04KTOJvXJ6W/+PneaolJB9+CyM9nk1LocmYrPpP2ZmEwfVJDNx6OVsrkH2GqtLobo5Cp3jl1pve4Rai+zaXjKTXQ/EwSaJKvrgN9/XCibe4ENT/7sdH6CZJ6uAjPiL+BbFJUkkZdkkQay+bCKbJYNqvcBmzDKnZ1sXq/NnHJ2EkEXFiVJNlgD2awyzfe0pK6yL9hqrSzS/HC9BCzbkyn613z3taqLBcfLkrrKPmHrkC6myvKWFRgy5O50/aJSrFcW1Hj3EJvg1JUqy1tW2X0MT66CbGLidaFUlM29wFarrZ3bLLRHU0hWqxRpH0yT4sVve4ptS2aE2/oMvWBqdP+xse/AbQ3VrWRzT7C9i7uV2JOTzy69LSXgQ8WG83Rx8bdt3wtsdxylpF5ZsvjtfcF2l+4GEnDPWT01+hO2YmYvC6b53kdsL++CGanx3oVs7g22d3e3RyCblQqOW1i3+2NdA/JuzJ6cPLwomY54J6Mo1ONd8ymwl1sjK52ne0cTu9RsznXpZFm+3eKbVS5LaLfaQmkDsHfAtqW7PXhSPk/3jswWDpw/1XZNlyLP6rHrrontjGzFdkrAdaArVtp/XWxknu6HkE0wjqKWxn35S9XTl+T+Gm7NINWnrlHomT3E1noHbC83Zna/aHXMXTC7WS5ZnCivZ6+pQo1vtYRWp4fuxLZabXwgwG++1+PhlQz8gIV2fKtTEzpt0qaNu/U6zdTbGukB0mO0yEHb8AM08Sm0bZEnK22jRAGnRn8w2aS6K0pMuRPFp7KEbbyxrSiaospau9asSWpXdjqCpiiew6hmq4VTmZQp1Y0WD+0cReU1merKozYvkaeuxaO3SbYqG4Qba7mwoeEpcAj46fHwjwNt0YrcrTIzzDaju8s2bzArOPD8NAUHnkmNXh9+qY1slDji+6lrhWNz9pIzhp6xO3Yc3dHGabvZrIk1zj7xwTg7QEACvofdNL6Bgy49MPAf7sYJbIMNZPNkWvJt23cxkaKKxzCLGEUsVjO9QoINd1IboOX2AJ62wtlLCg//2A3cWU7xig2PweG41EBs+OPOD6CnYdpOPzVlLMA16h7ZlcGuqFskK+ujdIt5usrGdburmInu6Sl9G9uIrzWYGTalMcBHsLeqwj8aYmvAWcqdOhKaY6P6fMdQXBVhqQhUmx3AxTYhz/LYMeKx6sy4hhHuuvh6D9twQaGqlDPDguOa5S3bM7shm5mdnh3FR0dHh5MctiZGDlNr6BkOr9GEh2PwDqqrUhxi6zYk3AhwRFazZ+2UXtvEdT3ICZA7jWDOHWiH7cDT2zW2j5Ekj2ss8MOFLCzLQ2O13yuiVobth5TN7m3ZnEM7fH78/eHR4dFZrmsZk/MgrumQGJNkjD8EWDO1RmeBjUiuK2fYWh1A1rBm2DiJyTYQbD0IT5PvpRfp9dJOoK50BHzFC81+EbaCKH3w6ORxteUtFS0PiV4pm7hhArgOD49++7uzU/hFL06zOcjaKL1e5v52b9bdM2OCLcIg7WUdSoYNQ7U+C1Ji+gJbQDag+GLGYwgCxjD87s+aDgoHiaug4dzmXWabquJeZofrFkoAfQaheYjhqVhyHZ5McqcpBAQHF3bIaFUWyYi15SD/7qiDkYgCIcNmj3wmqpNia1rwlDgfQ37X7XE6boMewhzDQUcooiFuFft8AwirPXZzbJhtlt2kYmPjXNOLzJgEQpls1gEYMkMxkL5/Pjk6PFsKi15/pFljPh3kS2Mj6NRwgbsBL8JgdTyGHn08xt6oPbZGRh9e7I3HLfyKohXA1h6GYsgbfXiJbIDX+FrHCniBPILXxn0HpcWE9xinVpyRvLwhm/fuVDaZyHPiqM50iyUgM+REmNFnz4+Pj6+enx/e6E+aQjrOQmyt5uySmsJtuWObS6+lTXsQpGb7ZuNmjgwqAlilcsHC3Yhs3nG2KUo2mZXnuuXMCLYjelKnD8+P0a4Ob2HLDGNM2jwTR2weX9aCDKrrRrXiyJzZDyKb2A+vyDZXY5ucfYfIfv9bwu2oABtvSpKzeeGH9yRJK/UkdhBKer/ikV+SbLPoK4zvbGIlZmCnqAdI7R/+cXr83fkxSGoRgHZ5Oa14tzXxx/Jtfm1hKrOTJ5VXhd6GsnaCr/KRRcA2QWz/9Gsderbj87MibD8Ka20vmxQTx2tyCK76wY+Orp6jGBz/7g/nx98fH0+O8qe57AWVfaKoNbvyMVv90K0ta9uiHMWJejfeRnLpq3MwoPYdRPXV2fF3eWzNppXvzVljE27z1guBZQdBbnP2KLAEIbDmhy4vrGtbMFPVSE2KekOO4xaw1habFMc0UMLoI6BGhh746gRS0sW4jbUU3eZrLF4RXjovtbKHS3zmV5xzoGatPWvddEa1gCWtBGfUJLvDZl6aHYu1zIEzCHGYQ94ke8fV1tmMmAiD1ihxS5hBXC6csCCPyphFimNJERY4To+urg4nIKXfzbbRC2/jvcG4XWsZA6HZ19r4vYrA4llB6wsB2681wXMClg3aA6PF4uN+34CnbL/fDPhg1ILWuGHE92u61+/AUQCbwfc1gYXNnbYt9IMaiCxg4/uDcGwJwQgHOH02GFiFLrdJlHY5Jokiv8iFgFn2aLFL4cHC0Lb0eRI3wXT07Or87BQXsJ+ePX9+tTjHvmL327bjjQaSpgBAcD6npmhKILXtsCbxbaVnhLrnSGOl3bcHsiPAK57Ztw1bsxuyrkttxdE0zZMCeMFoAjYr0hTWsR2lYQcKr2i6ANgCc6B7GrwJDAx5qSE7UuGURDrKq2SiG0duQXcmLpitx9ZVpMQdhbq5eOmMZPHiGX6p6RCYHeUHIM1O4PKy6dm2bboBeNs48HSr1ZeABDxgIejsljLueYHUqtkDs4VhaNu6pZimO7bHPYmXvL6mWXobj8ILjqX02paujFuhYbvjtmcPWNYKAzOQtQa+SR/epKHA2xSPkKsxS5LIZYqZLQfjot2q2zMwqqk7yrLPEm87nMBvwgyyU3HRQRn9BnhEoxboo4ZFequBbYQNLRRcLcRZKEHyxkptrAjKeATYILR41wEq9qBh9Vyho0A4SyPN0DtKA0ISvM00xqYhBbCXPfLag07SJt4W6EoQGumbjKVWCbbeiiwU8py8df2kWDZvMVviJs7cTZTTzkDxbGekyFiYlfPdA43D3eeADJkdka+aLLANYITPW5IdtD1Jh65JFwKnp0tmm/dqAUJq25bQtyWDNyTHCTAbgB49MHnBlrRW6ElW05Ysy6rBP3AU+BysDhypXcPNegsgSppQG2h9B7pAr+VhGiLoLV3oO4VD5MVs2syouP7N28VXZCg/ltUiCVjJLI8NtZTjZEmB8SFVj0JKd3QXYLquKy99DhClV2np6GySHnJxiiwmBiwPnzyPZWwcG8B1kec1lryALsfzII+8ILDkUtMt+Bo0ZOEBC7rYZslRUCLJkcjmmtAUcMKfRXUFaZ2/iVA2CpmXl4i5iW7bymQyCy5fTiK5XDZXb8pjk20sFsq6ZjlOl8Mv7CqRemvPsyMshue+0lR4xrc/ebu4NPaD2XwGTJTdeMrosTzrdtQoUrrrZXOVLdIufMTVVSeUHAW7A9WVldWfw+nkdInlBpdQPZe8O+NTQXOVC1eXpFntqAtDDaawjlTOjLSYPwLuA81x0OO64GeFQ75bVnrSJSPRFVYQa7ePsUGRgMWaun8B4wF/Vjvi/CTyV98K6+ZQoxI2E6dMurLrKptMUZees7EqLIvmTITVPXtwK0kTNilJkbkbM+v2u4kaM36BTxRJwO2G82YEMiXLilyBdv4I+ctppj9NuCro6VmB1432fAuLCZHQZAUTnJD05uxs0+xpD1cYscKsJSsIzoCF9paZHq7ZrNWyhmMzbVTB2vb8XFU/Tpgil1jDTHEnk8m8R8+PeDlb2XC6VaTp3MyVoBsASmuzmsPXBnrbCmu6FvbJllErGOgB23a0ATsQBobDs0E4ABB93eAHQdhnATGM+tmB3hcG4UDgLb0f9GuO1oYEtBYMwpqm8bAFpNoxpM6gGehWpcp4Np+m+kxU5GZlsol2enb4/duj2cTwTWz1zYpTyCyPjfcMnZcsRw9GhsmrlmaDJEsDcKG2ZOm64Q4gFdAMtQXJleOY/SiQIEk1Bh4kbwOlIRkjplNrKwNImwbRwPEsLTQsS8e8vTlyB/LINixIsVrSaMQ0lBY0Cyr5W4fCm6XEUbEEdMsD7BRn646/xnlhnBgm176I0o2gcSkzrs7MTw+Gu2ZTNk3InTxbsBuS0OzoxlgCX4FcKTQcGM9L457Nw8C+15GcyJQMSLhs29EteEXq9TDHDCXLG/Awwm03e6FlQO6F2DTYeRzokucpfWhoj6VOaCvVZhTS9U15MvkrXSsB6bTw4bfHfzg8g1HrUbrzkihsxEwUZSbWLhbYRmNvoHT6ltQPJMHuhU7P0o2OBANTpRdYIx3IKIM+A+ykNg/pemMEPY/SCB3dQA9s1sDbakZDMcyGNwq1nhVaCqRmkIUBtp7SCkJNb2g9hWVVSETBPy0rKME1j1Jj+eSjOMt71ssmcTRMw4+++eeBXKevDo8m22HjaIpAq8euboS+mve2sN23vWbf1rWm1mzpkmENUB7ZwPaEgSU4bM/U7abGO0LTaY0wA2sakmZBKw2yLpMkS9Kg5UhOuwVuZwQDSTNASdmBBfsERseRRtDQc9rwn+0ETqXx83hxjb5v64qepMzKy2VoKbR0YrjryCS3vBmlq++2uGRi6mecSFO24fgueFxOSdk0EYIfgZQXBZIpkTojT4qJTcE0LIg+shEzLPQFXpi1miVLMCYWyBIj3BsOyeK4DVqgnNZIeoUNMWsTKoppVnRjXN3TY3KbCq4Cs7RwgVlkSib+9vj8DDLLDaN0xoxWh6458HUGw5T24yonvjBdf6fl31sZKY0zbujJusvUq2QBM8PaYspMJLPpx1dX5+czd6uGLZMAVWUuRo5N0XUamHm+Hm14CX99ajDiRWyeTTKfyswItqPT08lsBQJOoJzhMoSj02VshSXetDvjaGYYaRcJ5PfgZipj215CceL6s965ddzZdW7CLMV2dnqUrkD4LfE2nBOoxm0mARzEI4yiEkYUOZGSPMdmhiRsd82kgqWl8e5mzOppLfuMQPu3f/lXwu27U6IRp0vYbovCjBl0aPFowLg0dnBM4mmxy8xGu/uAjZTGKyjeTQNJODpNsf37f/zh+GqC88JkPEIXe5s4i806rXrQnfk09mdDJdSHQy5jtifYcP2TuPkEPTI6uyJe9sc//v74+Pz8+CqdTUFZuFUar89lU6zTUWjpvg+9WZ1WhroX+TRH523XSKoYH+YvcwNsuAaB9G3/+V9vnx9/Dw9JlB4e1le4W+ZLYmI6jhOpmOeqtBd6vp/3MxK81K6RVDFSdNsIG2k8IWsQCLYzQHNOZ53bCmwzXxLFhPFtF/owMOjOHDdilt2MplRcd7lrJJUMV2NXjFKOkSAR9m5gS73pakLk9Qh/544ndmeZkz+0dSvBR7SoRrYJEkCLN5mluHdNpJK1vWru1u26lBU4I4do79nR+fOrdGHaYu5kcn7+/GjhkcRUIgG+qY9iG5HRQ0V3TSaqc6uZ7Qs2snR1HTbK5RTLkG1FFVXSXZFwPEQtPc+mVidHzyG/Or2BjYJk09NGik+jE/pSqENoissioC6vIdw1kWqGX+Zag00ehI4WSrlKbTrYAD2lRcyxxLMr9L6sCJIvulGqp4Ns1mnal5RI8ulbEnBz3eWugVQzUhov5CZ7umtQgWfnbzRI6h2YltYPRVzjjcxIoXI+Aswt2aKRChUxTiypnCjeZHb7LXcNpJqR+6MWYWMo3XS07q2KeRqkRyKuEZoxO5zkvCYfpXQSeaHkUzjUoJjhsmyusF0DqWid7hK2bDJesWVJH1ASrpsRKXfZLdKh7fOrdI1QtnpjYbkopVUlclUakyhfTXzmlgTsKTZSGp9dhKt45G9OqJwsm5Zm+eRrOrIn3Zi1wyi9Iutd8qs3cpbXUhzdArMkGaprme0PNnJ/VFx64EYeVt1UynYNfVSXXLybv6vYq76IlWagWN7NapVF2HDcxvhgqjpjtmaUuGseVY0XZ9jIt8FMZWD0zVQ2KUmSC2Y6J2TBy+R09dZ8aZym/GRIkWHvbdncY2zk/qjoHnJd1RxDNklHxjFuVLZwQzwtrZwsRSnJFFS12rcVdo2jqpGiG1ymGzi649kijh9kSaq+2GUFtNyKJTUNzcrlqV3jqGx8iq078FAdQAIUZaPFLjeZASQqx1wtl4C9xYalcXG2QJ6TJGnDhRu3maFtfQfBXdOobGQ9Ki53lCNPvr3esbKJ3YwZVfrV2/cEG1tLsTES807MlmzrnnHXNKrblqXxHLMlYhzHDLeP0l3DqG5kPerWnRGXC01k5kbmVOeK7sXzHmEjpfHtOqMbzGTfnoYXobdVlN5cYP+jtw1K44XMuhRHXVxcezEjchy+sNnxpPpv/vs3e4atvOi20pZkk+pylKtPE1tRaa47ZCABLaoLrTJVNWPP/Q2htk/YSotua5nRHJWY09BMGI7rckMaF5xTVNXOTa1PlQsvzEpT8q5ZbGJjqjq25aEGx/g6SIDp0hxHU0M/in1KpanCKuSyubFyCcNFJm0rMq7v7xrFJpYvupUatzw8o5lkOtQ9l0JkjB/HCfGzaumULOsOF2d/hZHyh1EUcfsUpDXBqIItLwHdLk37qn7heSq6mUr5vuf6FF2VGZh64cXybC0hfpkwva/brlFsZB1uHbbl7kxOknjqxK5PYyUNLjpSVdRPdc3i8iUj374R69wwYph5grJrEhtZKyu6rbQbEjBUVS90QolDZpQLzCIm7c42HsSIagK9Ye7ON/uwLHBhZD3qamxiV80x43wVhhpTP4J8gIIwjaKhr3a3Y1Z3/TjJVy+70fTVrklsZoK4Ehswy4/OuKE+1aaer6KjMTDSGLoqVVU2b9vSfQvU+PWrVx8f7BrEZtbL1qPmjFtO0Dk/mpqu7cNDWh0mfrSJbK4xxrsEZGi7BrGZZaXxHDMVe7H5kFaPdd2zZRieUSpKQDKkunfETDavZ8z2DltWdEsNJQCnnFwGkakwIktix4YsAGeJITYThgw1NpHNInP1pwtme4dtUXRLi2cMxGAyZEjmlIwgODnwMxX8LIpgcLulBNwydfrxErODg6e75rChpetRSeZEM0MIQhW1kps606kt48JHSnXjYeQzd8YMLH51sAztet+wkVs1ABB0qDhiYOzPubHqm5QMstmlmISBLGA21LgTZGjqoxyz68vXry+vd81hUyNRii7lDyEylWGsh7oM3T742RBIJsydyWbOXs+RXV4/hf/3rm9LS+Nq1yffUAljLTYjDvXABz2I7k4Cls0jPdtTgHZ9jfQOXu8aw6ZG1qOCQ9lJ/FqPY5RNTiWqOcTVG3fVnS0b8wr6s+un6GZA7/XFxcX6E/2RGd5tlaOYWJ8mWNWgVRW/EY7Z5g/EDO36IEV28Pr1xfTy+uDjXVPY2EhpXKVdxocsQE2S2B2qW2bopSZSubtAhBilL168ePN6ilF68D+7prCxkdI4ehYwi3x/ljnd8R+14lRmyDCLkocMUfrmL5+8IS734o21f9hqY3I7ayzl3GG2mTfIN2a2OPDBwZsXBykzQm/XEDY3UhpXKZehNynSLky9vTh6JTOwRUOdaOmLTz6BSN3D5Ko2K7qlbrbhLCda140KbykC40GGBOfMhgts7itk9peU2V5iq43r2PlsIQEco0JgF9yeHCQgb0BPzU8GvsqidG+xkdL45n7G+ElctMQUmA1vMMNPhVuAmy7n8rtmsIVtcH/UORYslQwLusGZbOb7NEJXjcJ43ijJpfNPry93zWAbEzZjplI4uCvYuCQBKTNCl/nTn5j8Lc+4GbanB9evL/YvlUdbdX/UQmOi2C9afEkvSwA8ngvz//7pxt1VLz5GZpeXFyQt3TWCbezW/VELDefpCv5cNcjmcDk4y7/DEb06gET+6WzwtmsE29jy/VGLjBnGQ6boxoIrZHONyFCALY3TN5988smuEWxl4xXLxJk/Lx5zHCQRiVqwmohLmQ2TaFkC1tjr2YCXpFi7JrCV8ebyFbmRrv7fn2e9fhdvlJr45bLpR54XJ9WZgcUfH7z5y5tZWrprAlsZWY+aWaSYSRxGMyochcwKrrybymYUe1GUdmzr/xjF3BhIFNIohXRh1wS2s/FsqK967jSOw+wewzKMaAtlEyUALIlj1/cJvg3zWdK1vYBMfi9TeTRyqwZG1XVGMaP0j31Cig48Cu41mWYBwyEwi1NmayUg220hKh6J0hckSv8fk4/IhREvvQoAAAAASUVORK5CYII=', // Placeholder image URL
        width: 1200,
        height: 630,
        alt: 'Heart Rate Calculator on Zenicalculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heart Rate Calculator - Zenicalculator',
    description: 'Calculate your daily macronutrient needs based on your weight, height, age, activity level, and fitness goals.',
    images: ['https://zenicalculator.com/og-images/heart-rate-calculator.png'], // Placeholder image URL
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white pt-24 md:px-8 lg:px-16 max-w-7xl mx-auto space-y-10 font-inter"> {/* Changed bg-gray-100 to bg-white */}
      {/* Page Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Heart Rate Calculator
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Calculate your optimal heart rate zones for effective workouts.
        </p>
      </section>

      {/* Main content and Ads container */}
      {/* This container sets up the two-column layout for medium/large screens (md:flex-row) */}
      {/* On mobile (default), it stacks content vertically (flex-col). */}
      <div className="w-full flex flex-col md:flex-row md:space-x-8">

        {/* Left Column: Main Blog Post Content Area */}
        {/* Takes full width on mobile, 3/4 width on desktop. */}
        <div className="w-full md:w-3/4 p-8 space-y-10">
          {/* Heart Rate Calculator */}
          <HeartRateCalculator />
          {/* Static Content (Introduction and Explanation) */}
          <HeartRateStaticContent />

          {/* Mobile Ad Section 1: Visible on mobile, hidden on medium screens and up */}
          {/* These ads appear inline with content on small screens */}
          <div className="block md:hidden mt-8 mb-8">
            <AdsSection />
          </div>

         
        </div>

        {/* Right Column: Desktop Ads Sidebar */}
        {/* This column is hidden on mobile screens and only visible on medium/large screens. */}
        {/* On desktop, it takes 1/4 width and is placed on the right (md:order-last). */}
        <div className="hidden md:block w-full md:w-1/4 mb-8 md:mb-0 md:order-last">
          <SideAdSection /> {/* Contains the two vertical ad units */}
        </div>
      </div>
    </main>
  );
}


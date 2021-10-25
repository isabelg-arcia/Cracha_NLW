const LinksSocialMedia = {
  github: 'isabelg-arcia',
  youtube: 'channel/UCgySjG4_j0tldY957yg702w',
  facebook: 'isabelcgarcia',
  instagram: 'isabelg_arcia'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response =>
      response.json()
    ) /* Busca o documento no link,chama a função e esta, o transforma em json */
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url /* Irá alterar o conteúdo da href */
      userPhoto.src = data.avatar_url /*Irá trocar o src da tag img */
      userLink.textContent = data.login
    })
}

getGitHubProfileInfos()

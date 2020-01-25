var handleResumeHeader = function (header) {
    var result = ''
    if (header) {
        var d1 = '<div class="media flex-column flex-md-row">'
        var img = '<img class="mr-3 img-fluid picture mx-auto" src="'
        var imgEnd = '" alt="">'
        var d2 = '<div class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">'
        var d3 = '<div class="primary-info">'
        var h1 = '<h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">'
        var h1End = '</h1>'
        var dEnd = '</div>'
        var d4 = '<div class="title mb-2">'
        var nDetail = '<ul class="list-unstyled">'
        var emailStart = '<li class="mb-2"><a href="#"><i class="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>'
        var phoneStart = '<li><a href="#"><i class="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>'
        var emailPhoneEnd = '</a></li>'
        var d5 = '<div class="secondary-info ml-md-auto mt-2">'
        var social = '<ul class="resume-social list-unstyled">'
        var socialLi = '<li class="mb-3"><a href="'
        var socialLiMid = '" target="_blank"><span class="fa-container text-center mr-2"><i class="fab '
        var socialLiMid2 = ' fa-fw"></i></span>'
        var ulEnd = '</ul>'

        var icons = {
            "linkedin": "fa-linkedin-in",
            "github": "fa-github-alt",
            "file": "file-user",
            "website": "fas fa-globe"
        }
        result = result.concat(d1)
        if (header.hasOwnProperty('photo')) {
            result = result.concat(img).concat(header.photo).concat(imgEnd)
        }
        result = result.concat(d2).concat(d3)
        if (header.hasOwnProperty('name')) {
            result = result.concat(h1).concat(header.name).concat(h1End)
        }

        if (header.hasOwnProperty('title')) {
            result = result.concat(d4)
            var s = ''
            $.each(header.title, function (key, value) {
                s = s.concat(value).concat(' | ')
            })
            result = result.concat(s)
            result = result.substring(0, result.length-3)
            result= result.concat(dEnd)
        }
        result = result.concat(nDetail)
            .concat(emailStart)
            .concat(header.email)
            .concat(emailPhoneEnd)
            .concat(phoneStart)
            .concat(header.phone)
            .concat(emailPhoneEnd)
            .concat(ulEnd)
            .concat(dEnd)
            .concat(d5)
            .concat(social)

        $.each(header.social, function (key, value) {
            result = result.concat(socialLi)
                .concat(value.url)
                .concat(socialLiMid)
                .concat(icons[key])
                .concat(socialLiMid2)
                .concat(value.display)
                .concat(emailPhoneEnd)
        })
        result = result.concat(ulEnd).concat(dEnd).concat(dEnd).concat(dEnd)
    }
    return result
}

var handleWorkSummary = function (experience) {
    var result = '';
    if (experience) {
        var title = '<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>'
        var contentSection = '<div class="resume-section-content">'
        var pStart = '<p class="mb-0">'
        var pEnd = '</p>'
        var divEnd = '</div>'
        result = result.concat(title).concat(contentSection)
        $.each(experience, function (key, value) {
            if (key.toLowerCase()==='summary') {
                result = result.concat(pStart).concat(value).concat(pEnd)
            } else if (key.toLowerCase()==='points') {
                result = result.concat('<ul>')
                $.each(value, function (key, value) {
                    result = result.concat('<li>').concat(value).concat('</li>')
                })
                result = result.concat('</ul>')
            }
        })
        result = result.concat(divEnd)
    }
    return result;
}

var handleAllSkills = function (skills) {
    var result = ''
    if(skills) {
        var sectionHeader = '<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>'
        var sectionContent = '<div class="resume-section-content">'
        var divEnd = '</div>'
        var others = ''
        result = result.concat(sectionHeader).concat(sectionContent)
        $.each(skills, function (key, value) {
            $.each(value, function (key, value) {
                if (key.toUpperCase()==='others'.toUpperCase()) {
                    others = others.concat(handleSkillsOthers(value))
                } else {
                    result = result.concat(sectionContent)
                        .concat(handleSkills(key, value))
                        .concat(divEnd)
                }
            })
            result = result.concat(others)
        })
        result = result.concat(divEnd)
    }
    return result
}

var handleSkills = function (key, value) {
    var result = ''
    if (key && value) {
        var header = '<h4 class="resume-skills-cat font-weight-bold">'
        var hEnd = '</h4>'
        var ulStart = '<ul class="list-unstyled mb-4">'
        var liStart = '<li class="mb-2">'
        var skillName = '<div class="resume-skill-name">'
        var progress = '<div class="progress resume-progress">'
        var progressBar = '<div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: '
        var progressBarEnd = '%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>'
        var divEnd = '</div>'
        var liEnd = '</li>'
        var ulEnd = '</ul>'

        result = result
            .concat(header).concat(key).concat(hEnd)
            .concat(ulStart)
        $.each(value, function (key, value) {
            $.each(value, function (key, value) {
                result = result
                    .concat(liStart).concat(skillName).concat(key).concat(divEnd)
                    .concat(progress).concat(progressBar).concat(value).concat(progressBarEnd)
                    .concat(divEnd).concat(liEnd)
            })
        })
        result = result.concat(ulEnd).concat(divEnd)
    }
    return result
}

var handleSkillsOthers = function (skills) {
    var result = '';
    if (skills) {
        var sectionDiv = '<div class="resume-skill-item">'
        var header = '<h4 class="resume-skills-cat font-weight-bold">Others</h4>'
        var ulStart = '<ul class="list-inline">'
        var liStart = '<li class="list-inline-item"><span class="badge badge-light">'
        var liEnd = '</li>'
        var ulEnd = '</ul>'
        var divEnd = '</div>'
        result = result.concat(sectionDiv).concat(header).concat(ulStart)

        $.each(skills, function (key, value) {
            $.each(value, function (key, value) {
                result = result.concat(liStart).concat(key).concat(liEnd)
            })
        })
        result = result.concat(ulEnd).concat(divEnd)
    }
    return result;
}

var handleEducation = function (educations) {
    var result = '';
    if (educations) {
        var sectionTitle = '<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>'
        var sectionContentStart = '<div class="resume-section-content">'
        var ulStart = '<ul class="list-unstyled">'
        var liStart = '<li class="mb-2">'
        var degree = '<div class="resume-degree font-weight-bold">'
        var school = '<div class="resume-degree-org">'
        var time = '<div class="resume-degree-time">'
        var divEnd = '</div>'
        var liEnd = '</li>'
        var ulEnd = '</ul>'
        var gpa = 'GPA - '
        result = result.concat(sectionTitle).concat(sectionContentStart)
            .concat(ulStart)

        $.each(educations, function (key, value) {
            result = result.concat(liStart)
                .concat(degree).concat(value.degree).concat(divEnd)
                .concat(school).concat(value.school).concat(divEnd)
                .concat(school).concat(gpa).concat(value.gpa).concat(divEnd)
                .concat(time).concat(value.time).concat(divEnd)
                .concat(liEnd)
        })
        result = result.concat(ulEnd).concat(divEnd)
    }
    return result;
}

var handleCertifications = function (certificates) {
    var result = '';
    if (certificates) {
        var title = ''
    }
}

var handleLanguages = function (languages) {
    var result = '';
    if (languages) {
        var languagesHeader = '<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>'
        var sectionStart = '<div class="resume-section-content">'
        var ulStart = '<ul class="list-unstyled resume-lang-list">'
        var liStart = '<li class="mb-2"><span class="resume-lang-name font-weight-bold">'
        var proficiencyStart = '</span><small class="text-muted font-weight-normal">'
        var proficiencyEnd = '</small>'
        var liEnd = '</li>'
        var ulEnd = '</ul>'
        var sectionEnd = '</div>'
        var languageType = {
            "native": "Native",
            "professional": "Professional"
        }
        result = result.concat(languagesHeader).concat(sectionStart).concat(ulStart)
        $.each(languages, function (key, value) {
            if (languageType.hasOwnProperty(key)) {
                result = result.concat(liStart).concat(value)
                    .concat(proficiencyStart)
                    .concat(' (')
                    .concat(languageType[key])
                    .concat(')')
                    .concat(proficiencyEnd)
                    .concat(liEnd)
            }
        })
        result = result.concat(ulEnd).concat(sectionEnd)
    }
    return result;
}

var handleInterests = function (interests) {
    var result = ''
    if (interests) {
        var interestHeader = '<h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>'
        var sectionStart = '<div class="resume-section-content">'
        var ulStart = '<ul class="list-unstyled">'
        var liStart = '<li class="mb-1">'
        var liEnd = '</li>'
        var ulEnd = '</ul>'
        var sectionEnd = '</div>'
        result = result.concat(interestHeader).concat(sectionStart).concat(ulStart)
        $.each(interests, function (key, value) {
            result = result.concat(liStart).concat(value).concat(liEnd)
        })
        result = result.concat(ulEnd).concat(sectionEnd);
    }
    return result;
}

var handleWorkExperience = function (jobs) {
    var result = ''
    if (jobs) {
        var articleStart = '<article class="resume-timeline-item position-relative pb-5">'
        var timeLineStart = '<div class="resume-timeline-item-header mb-2">'
        var flexCol = '<div class="d-flex flex-column flex-md-row">'
        var positionTitle = '<h3 class="resume-position-title font-weight-bold mb-1">'
        var positionEnd = '</h3>'
        var positionLocation = '<div class="resume-position-location ml-auto">'
        var positionTime = '<div class="resume-position-time">'
        var company = '<div class="resume-company-name ml-auto">'
        var itemDesc = '<div class="resume-timeline-item-desc">'
        var roleDes = ''
        var roleRes = '<h4 class="resume-timeline-item-desc-heading font-weight-bold">Role & Responsibilities:</h4>'
        var pStart = '<p>'
        var pEnd = '</p>'
        var ulStart = '<ul>'
        var li = '<li>'
        var liEnd = '</li>'
        var techDesc = '<h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>'
        var ulTechStart = '<ul class="list-inline">'
        var liTech = '<li class="list-inline-item"><span class="badge badge-primary badge-pill">'
        var liTechEnd = '</span></li>'
        var ulEnd = '</ul>'
        var divEnd='</div>'
        var articleEnd = "</article>"
        var items = [];
        $.each(jobs, function (key, value) {
                var content = articleStart
                    .concat(timeLineStart)
                    .concat(flexCol)
                    .concat(positionTitle).concat(value.position).concat(positionEnd)
                    .concat(company).concat(value.company).concat(divEnd)
                    .concat(divEnd)
                    .concat(flexCol)
                    .concat(positionTime).concat(value.time).concat(divEnd)
                    .concat(positionLocation).concat(value.location).concat(divEnd)
                    .concat(divEnd)
                    .concat(itemDesc)
                    .concat(pStart).concat(roleDes).concat(pEnd);

                var str = ''
                var list = value.resposibilities;
                $.each(list, function (key, value) {
                    var s = li.concat(value).concat(liEnd)
                    str = str.concat(s)
                });
                if (str.length > 0) {
                    content = content.concat(roleRes)
                        .concat(ulStart)
                        .concat(str)
                        .concat(ulEnd)
                }

                str = ''
                list = value.technologies;
                $.each(list, function (key, value) {
                    var s = liTech.concat(value).concat(liTechEnd)
                    str = str.concat(s)
                });
                if (str.length > 0) {
                    content = content.concat(techDesc)
                        .concat(ulTechStart)
                        .concat(str)
                        .concat(ulEnd)
                }
                content.concat(divEnd).concat(articleEnd);
                items.push(content);
            });
        $.each(items, function (key, value) {
            result =result.concat(value)
        })
    }
    return result
}

$.getJSON('data/resume.json', function(data) {
    $('#resume-timeline').html(handleWorkExperience(data.jobs));
    $('#interestSection').html(handleInterests(data.interests))
    $('#languageSection').html(handleLanguages(data.languages))
    $('#educationSection').html(handleEducation(data.education))
    $('#skillSection').html(handleAllSkills(data.skills))
    $('#workSummarySection').html(handleWorkSummary(data.experience))
    $('#resumeHeader').html(handleResumeHeader(data.header))
})
// app/modules/content_inventory/memberlist/interactions/gamingImage.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    report = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = report;
    var _closure1_slot2 = option;
    entity = function() { // Original name: _generateGamingContentImageFromEntry
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    sizing = argFoo;
                    verify = argBar;
                    romeon = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 612; continue _fun00001 }
 21:
                    var _closure4_slot0 = sizing;
                    report = undefined;
                    var _closure4_slot1 = report;
                    var _closure4_slot2 = report;
                    var _closure4_slot3 = report;
                    var _closure4_slot4 = report;
                    var _closure4_slot5 = report;
                    michal = sizing.extra;
                    output = michal.game_name;
                    oscard = _closure1_slot4;
                    tangon = oscard.getApplication;
                    michal = sizing.extra;
                    michal = michal.application_id;
                    oscard = tangon.bind(oscard)(michal);
                    offset = null;
                    michal = offset == oscard;
                    backup = undefined;
                    if(michal) { _fun00002_ip = 114; continue _fun00001 }
 100:
                    tangon = oscard.getIconURL;
                    michal = 128;
                    backup = tangon.bind(oscard)(michal);
 114:
                    oscard = _closure1_slot6;
                    tangon = oscard.getUser;
                    michal = sizing.author_id;
                    kiloes = tangon.bind(oscard)(michal);
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 15;
                    michal = oscard[michal];
                    option = tangon.bind(report)(michal);
                    tangon = offset != kiloes;
                    michal = 'Author must not be null';
                    michal = option.bind(report)(tangon, michal);
                    tangon = _closure1_slot0;
                    michal = 16;
                    michal = oscard[michal];
                    option = tangon.bind(report)(michal);
                    oscard = option.maybeFetchColors;
                    yankee = offset != backup;
                    tangon = '';
                    michal = tangon;
                    if(!yankee) { _fun00002_ip = 210; continue _fun00001 }
 207:
                    michal = backup;
 210:
                    michal = oscard.bind(option)(michal);
                    SaveGenerator(address=219);
 217:
                    return michal;
 219:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 609; continue _fun00001 }
 228:
                    option = offset == kiloes;
                    oscard = undefined;
                    if(option) { _fun00002_ip = 257; continue _fun00001 }
 237:
                    foxtra = kiloes.getAvatarURL;
                    yankee = verify.guild_id;
                    option = 128;
                    oscard = foxtra.bind(kiloes)(yankee, option);
 257:
                    option = new Array(1);
                    option[0] = oscard;
                    _closure4_slot1 = option;
                    oscard = _closure1_slot24;
                    option = oscard.bind(report)(option, backup);
                    oscard = _closure1_slot5;
                    echoed = oscard.locale;
                    yankee = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    oscard = 8;
                    oscard = foxtra[oscard];
                    result = yankee.bind(report)(oscard);
                    oscard = result.formatEntryTimestamp;
                    oscard = oscard.bind(result)(sizing, echoed);
                    _closure4_slot2 = oscard;
                    oscard = 17;
                    oscard = foxtra[oscard];
                    foxtra = yankee.bind(report)(oscard);
                    yankee = foxtra.getHeroColors;
                    result = offset != backup;
                    oscard = tangon;
                    if(!result) { _fun00002_ip = 356; continue _fun00001 }
 353:
                    oscard = backup;
 356:
                    oscard = yankee.bind(foxtra)(oscard);
                    yankee = oscard.primaryColor;
                    _closure4_slot3 = yankee;
                    oscard = oscard.secondaryColor;
                    _closure4_slot4 = oscard;
                    foxtra = _closure1_slot0;
                    backup = _closure1_slot2;
                    oscard = 18;
                    oscard = backup[oscard];
                    yankee = foxtra.bind(report)(oscard);
                    oscard = yankee.formatCanvasDescription;
                    oscard = oscard.bind(yankee)(sizing, verify, kiloes);
                    _closure4_slot5 = oscard;
                    oscard = {};
                    oscard['format'] = romeon;
                    yankee = 1;
                    oscard['quality'] = yankee;
                    yankee = global;
                    yankee = yankee.HermesInternal;
                    sizing = yankee.concat;
                    kiloes = 'user-reacting-to-';
                    yankee = '.png';
                    kiloes = sizing.bind(kiloes)(output, yankee);
                    yankee = kiloes.toLowerCase;
                    yankee = yankee.bind(kiloes)();
                    oscard['fileName'] = yankee;
                    yankee = 'png';
                    oscard['fileType'] = yankee;
                    yankee = 11;
                    yankee = backup[yankee];
                    yankee = foxtra.bind(report)(yankee);
                    yankee = yankee.DiscordCanvasExporterOutputFormats;
                    yankee = yankee.CloudUpload;
                    if(!(romeon === yankee)) { _fun00002_ip = 538; continue _fun00001 }
 517:
                    verify = verify.id;
                    offset = offset != verify;
                    if(!offset) { _fun00002_ip = 532; continue _fun00001 }
 529:
                    tangon = verify;
 532:
                    oscard['channelId'] = tangon;
 538:
                    tangon = _closure1_slot0;
                    verify = _closure1_slot2;
                    zuuluu = 14;
                    zuuluu = verify[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.generateImageFromCanvas;
                    zuuluu = {};
                    zuuluu['assetsToLoad'] = option;
                    golfie = function(argFoo) { // Original name: drawImage
                        tangon = _closure1_slot25;
                        zuuluu = {};
                        michal = _closure4_slot2;
                        zuuluu['timestamp'] = michal;
                        report = _closure4_slot3;
                        michal = new Array(2);
                        michal[0] = report;
                        report = _closure4_slot4;
                        michal[1] = report;
                        zuuluu['colors'] = michal;
                        michal = _closure4_slot5;
                        zuuluu['description'] = michal;
                        michal = _closure4_slot0;
                        zuuluu['entry'] = michal;
                        entity = _closure4_slot1;
                        entity = entity.length;
                        zuuluu['numAvatars'] = entity;
                        michal = undefined;
                        entity = argFoo;
                        entity = tangon.bind(michal)(entity, zuuluu);
                        return entity;
                    };
                    zuuluu['drawImage'] = golfie;
                    zuuluu['exportConfigs'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=597);
 595:
                    return zuuluu;
 597:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 606; continue _fun00001 }
 603:
                    return zuuluu;
 606:
                    return zuuluu;
 609:
                    return michal;
 612:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot26 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = option[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    report = tangon.GAME_CONTROLLER_ICON_PATH;
    var _closure1_slot7 = report;
    report = tangon.imageWidth;
    var _closure1_slot8 = report;
    report = tangon.imageHeight;
    var _closure1_slot9 = report;
    report = tangon.imagePadding;
    var _closure1_slot10 = report;
    report = tangon.applicationImageSize;
    var _closure1_slot11 = report;
    report = tangon.avatarImageSize;
    var _closure1_slot12 = report;
    report = tangon.descriptionIndent;
    var _closure1_slot13 = report;
    report = tangon.descriptionMaxWidth;
    var _closure1_slot14 = report;
    report = tangon.NEW_GAME_ICON_PATH;
    var _closure1_slot15 = report;
    report = tangon.TIMER_ICON_PATH;
    var _closure1_slot16 = report;
    report = tangon.RESURRECTED_ICON_PATH;
    var _closure1_slot17 = report;
    report = tangon.TROPHY_ICON_PATH;
    var _closure1_slot18 = report;
    report = tangon.FLASH_ICON_PATH;
    var _closure1_slot19 = report;
    report = tangon.TRENDING_ICON_PATH;
    var _closure1_slot20 = report;
    report = tangon.NEW_RELEASE_ICON_PATH;
    var _closure1_slot21 = report;
    report = tangon.fontFamily;
    var _closure1_slot22 = report;
    tangon = tangon.fontWeight;
    var _closure1_slot23 = tangon;
    tangon = function(argFoo, argBar) { // Original name: getGamingImageAssetsToLoad
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            tangon = argBar;
            entity = {};
            michal = 0;
            michal = golfie[michal];
            entity['AvatarImage1'] = michal;
            oscard = 1;
            zuuluu = golfie[oscard];
            michal = null;
            zuuluu = michal != zuuluu;
            if(!zuuluu) { _fun00004_ip = 53; continue _fun00003 }
 37:
            report = {};
            oscard = golfie[oscard];
            report['AvatarImage2'] = oscard;
            zuuluu = report;
 53:
            verify = entity;
            option = zuuluu;
            zuuluu = copyDataProperties(verify, option);
            oscard = 2;
            zuuluu = golfie[oscard];
            zuuluu = michal != zuuluu;
            if(!zuuluu) { _fun00004_ip = 93; continue _fun00003 }
 77:
            report = {};
            oscard = golfie[oscard];
            report['AvatarImage3'] = oscard;
            zuuluu = report;
 93:
            verify = entity;
            option = zuuluu;
            zuuluu = copyDataProperties(verify, option);
            michal = michal != tangon;
            if(!michal) { _fun00004_ip = 120; continue _fun00003 }
 110:
            zuuluu = {};
            zuuluu['ApplicationImage'] = tangon;
            michal = zuuluu;
 120:
            verify = entity;
            option = michal;
            michal = copyDataProperties(verify, option);
            return entity;
        }
    };
    var _closure1_slot24 = tangon;
    report = function(argFoo, argBar) { // Original name: drawGamingImage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argFoo;
            entity = argBar;
            verify = entity.timestamp;
            zuuluu = entity.colors;
            foxtra = entity.description;
            backup = entity.entry;
            echoed = entity.numAvatars;
            michal = zuuluu.map;
            entity = function(argFoo, argBar) {
                entity = {};
                michal = argFoo;
                entity['color'] = michal;
                michal = argBar;
                entity['stop'] = michal;
                return entity;
            };
            report = michal.bind(zuuluu)(entity);
            zuuluu = option.setSize;
            michal = {};
            oscard = _closure1_slot8;
            michal['w'] = oscard;
            golfie = _closure1_slot9;
            michal['h'] = golfie;
            entity = 4;
            entity = zuuluu.bind(option)(michal, entity);
            tangon = option.drawRoundedGradientRect;
            zuuluu = {};
            result = 0;
            zuuluu['x'] = result;
            zuuluu['y'] = golfie;
            michal = {};
            michal['x'] = oscard;
            michal['y'] = result;
            entity = {'x': 0, 'y': 0};
            entity['h'] = golfie;
            entity['w'] = oscard;
            kiloes = 8;
            papara = option;
            cntext = report;
            record = zuuluu;
            config = michal;
            sequen = entity;
            vacuum = kiloes;
            entity = papara[tangon](cntext, record, config, sequen, vacuum, ctrled);
            entity = option.setColor;
            golfie = 'white';
            entity = entity.bind(option)(golfie);
            tangon = option.drawRoundedImage;
            zuuluu = {};
            entity = _closure1_slot10;
            zuuluu['x'] = entity;
            zuuluu['y'] = entity;
            michal = {};
            entity = _closure1_slot11;
            michal['w'] = entity;
            michal['h'] = entity;
            cntext = 'ApplicationImage';
            papara = option;
            record = zuuluu;
            config = michal;
            sequen = kiloes;
            zuuluu = papara[tangon](cntext, record, config, sequen, vacuum);
            tangon = _closure1_slot0;
            entity = _closure1_slot2;
            offset = 11;
            michal = entity[offset];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            michal = michal.DrawResultStatus;
            michal = michal.Failure;
            if(!(zuuluu === michal)) { _fun00006_ip = 339; continue _fun00005 }
 271:
            oscard = option.drawPath;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 12;
            michal = tangon[michal];
            michal = zuuluu.bind(entity)(michal);
            cntext = michal.ACTIVITY_IMAGE_FALLBACK_PATH;
            tangon = {};
            michal = _closure1_slot10;
            tangon['x'] = michal;
            tangon['y'] = michal;
            config = true;
            sequen = 2.6666666666666665;
            papara = option;
            record = tangon;
            michal = papara[oscard](cntext, record, config, sequen, vacuum);
 339:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 13;
            report = tangon[michal];
            sizing = zuuluu.bind(entity)(report);
            yankee = sizing.drawAvatars;
            report = {};
            report['canvas'] = option;
            output = ['AvatarImage1', 'AvatarImage2', 'AvatarImage3'];
            oscard = output.slice;
            oscard = oscard.bind(output)(result, echoed);
            report['avatarSrcs'] = oscard;
            output = {};
            oscard = _closure1_slot13;
            output['x'] = oscard;
            result = _closure1_slot10;
            output['y'] = result;
            report['position'] = output;
            output = _closure1_slot12;
            report['avatarImageSize'] = output;
            report = yankee.bind(sizing)(report);
            report = option.setColor;
            report = report.bind(option)(golfie);
            golfie = option.setFont;
            report = {};
            yankee = 16;
            report['size'] = yankee;
            yankee = _closure1_slot22;
            report['family'] = yankee;
            yankee = _closure1_slot23;
            report['weight'] = yankee;
            offset = tangon[offset];
            offset = zuuluu.bind(entity)(offset);
            offset = offset.TextTruncationMethod;
            offset = offset.Wrap;
            report['truncate'] = offset;
            report = golfie.bind(option)(report);
            yankee = option.drawText;
            offset = {'x': null, 'y': 64, 'h': 32};
            offset['x'] = oscard;
            report = _closure1_slot14;
            offset['w'] = report;
            golfie = true;
            golfie = yankee.bind(option)(foxtra, offset, golfie);
            golfie = {};
            offset = _closure1_slot7;
            golfie['iconPath'] = offset;
            golfie['text'] = verify;
            offset = new Array(1);
            offset[0] = golfie;
            sizing = _closure1_slot1;
            golfie = 5;
            golfie = tangon[golfie];
            yankee = sizing.bind(entity)(golfie);
            verify = yankee.extractTimestamp;
            golfie = backup.extra;
            golfie = golfie.application_id;
            verify = verify.bind(yankee)(golfie);
            golfie = 6;
            yankee = tangon[golfie];
            yankee = sizing.bind(entity)(yankee);
            foxtra = yankee.bind(entity)();
            yankee = foxtra.diff;
            golfie = tangon[golfie];
            golfie = sizing.bind(entity)(golfie);
            verify = golfie.bind(entity)(verify);
            golfie = 'days';
            golfie = yankee.bind(foxtra)(verify, golfie);
            sizing = 7;
            if(!(golfie <= sizing)) { _fun00006_ip = 746; continue _fun00005 }
 667:
            verify = offset.push;
            golfie = {};
            yankee = _closure1_slot21;
            golfie['iconPath'] = yankee;
            result = _closure1_slot0;
            yankee = _closure1_slot2;
            foxtra = yankee[sizing];
            foxtra = result.bind(entity)(foxtra);
            output = foxtra.intl;
            foxtra = output.string;
            yankee = yankee[sizing];
            yankee = result.bind(entity)(yankee);
            yankee = yankee.t;
            yankee = yankee.vYuyWV;
            yankee = foxtra.bind(output)(yankee);
            golfie['text'] = yankee;
            golfie = verify.bind(offset)(golfie);
 746:
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[kiloes];
            verify = verify.bind(entity)(golfie);
            golfie = verify.isEntryNew;
            golfie = golfie.bind(verify)(backup);
            if(!golfie) { _fun00006_ip = 854; continue _fun00005 }
 777:
            verify = offset.push;
            golfie = {};
            yankee = _closure1_slot15;
            golfie['iconPath'] = yankee;
            result = _closure1_slot0;
            yankee = _closure1_slot2;
            foxtra = yankee[sizing];
            foxtra = result.bind(entity)(foxtra);
            output = foxtra.intl;
            foxtra = output.string;
            yankee = yankee[sizing];
            yankee = result.bind(entity)(yankee);
            yankee = yankee.t;
            yankee = yankee.keY6mZ;
            yankee = foxtra.bind(output)(yankee);
            golfie['text'] = yankee;
            golfie = verify.bind(offset)(golfie);
 854:
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[kiloes];
            verify = verify.bind(entity)(golfie);
            golfie = verify.isValidStreak;
            golfie = golfie.bind(verify)(backup);
            if(!golfie) { _fun00006_ip = 990; continue _fun00005 }
 885:
            foxtra = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = yankee[kiloes];
            verify = foxtra.bind(entity)(golfie);
            golfie = verify.getStreakCount;
            echoed = golfie.bind(verify)(backup);
            verify = offset.push;
            golfie = {};
            output = _closure1_slot19;
            golfie['iconPath'] = output;
            output = yankee[sizing];
            output = foxtra.bind(entity)(output);
            result = output.intl;
            output = result.formatToPlainString;
            yankee = yankee[sizing];
            yankee = foxtra.bind(entity)(yankee);
            yankee = yankee.t;
            foxtra = yankee.Klie/P;
            yankee = {};
            yankee['days'] = echoed;
            yankee = output.bind(result)(foxtra, yankee);
            golfie['text'] = yankee;
            golfie = verify.bind(offset)(golfie);
 990:
            yankee = _closure1_slot0;
            foxtra = _closure1_slot2;
            golfie = foxtra[kiloes];
            verify = yankee.bind(entity)(golfie);
            golfie = verify.getTrendingType;
            verify = golfie.bind(verify)(backup);
            golfie = 9;
            golfie = foxtra[golfie];
            golfie = yankee.bind(entity)(golfie);
            golfie = golfie.TrendingType;
            golfie = golfie.GLOBAL;
            if(!(verify === golfie)) { _fun00006_ip = 1125; continue _fun00005 }
 1046:
            verify = offset.push;
            golfie = {};
            yankee = _closure1_slot20;
            golfie['iconPath'] = yankee;
            result = _closure1_slot0;
            yankee = _closure1_slot2;
            foxtra = yankee[sizing];
            foxtra = result.bind(entity)(foxtra);
            output = foxtra.intl;
            foxtra = output.string;
            yankee = yankee[sizing];
            yankee = result.bind(entity)(yankee);
            yankee = yankee.t;
            yankee = yankee.kAlUs7;
            yankee = foxtra.bind(output)(yankee);
            golfie['text'] = yankee;
            golfie = verify.bind(offset)(golfie);
 1125:
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[kiloes];
            verify = verify.bind(entity)(golfie);
            golfie = verify.getResurrectedEntryLastPlayTime;
            result = golfie.bind(verify)(backup);
            verify = null;
            if(!(verify != result)) { _fun00006_ip = 1212; continue _fun00005 }
 1159:
            yankee = offset.push;
            golfie = {};
            foxtra = _closure1_slot17;
            golfie['iconPath'] = foxtra;
            output = _closure1_slot0;
            foxtra = _closure1_slot2;
            foxtra = foxtra[kiloes];
            output = output.bind(entity)(foxtra);
            foxtra = output.getFullResurrectedBadgeText;
            foxtra = foxtra.bind(output)(result);
            golfie['text'] = foxtra;
            golfie = yankee.bind(offset)(golfie);
 1212:
            yankee = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[kiloes];
            yankee = yankee.bind(entity)(golfie);
            golfie = yankee.isEntryMarathon;
            golfie = golfie.bind(yankee)(backup);
            if(!golfie) { _fun00006_ip = 1305; continue _fun00005 }
 1243:
            yankee = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[kiloes];
            yankee = yankee.bind(entity)(golfie);
            golfie = yankee.getMarathonDescription;
            golfie = golfie.bind(yankee)(backup);
            foxtra = golfie.text;
            if(!(verify != foxtra)) { _fun00006_ip = 1305; continue _fun00005 }
 1280:
            yankee = offset.push;
            golfie = {};
            output = _closure1_slot16;
            golfie['iconPath'] = output;
            golfie['text'] = foxtra;
            golfie = yankee.bind(offset)(golfie);
 1305:
            yankee = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[kiloes];
            yankee = yankee.bind(entity)(golfie);
            golfie = yankee.isEntryTopGame;
            yankee = golfie.bind(yankee)(backup);
            golfie = offset;
            if(!yankee) { _fun00006_ip = 1588; continue _fun00005 }
 1342:
            foxtra = _closure1_slot0;
            yankee = _closure1_slot2;
            yankee = yankee[kiloes];
            foxtra = foxtra.bind(entity)(yankee);
            yankee = foxtra.getEntryDuration;
            source = yankee.bind(foxtra)(backup);
            golfie = offset;
            if(!(verify != source)) { _fun00006_ip = 1588; continue _fun00005 }
 1380:
            kiloes = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = yankee[sizing];
            verify = kiloes.bind(entity)(verify);
            output = verify.intl;
            backup = output.formatToPlainString;
            verify = yankee[sizing];
            verify = kiloes.bind(entity)(verify);
            verify = verify.t;
            foxtra = verify.C0Axoa;
            offset = {};
            verify = global;
            update = verify.Math;
            echoed = update.round;
            ctrled = _closure1_slot1;
            result = 10;
            result = yankee[result];
            result = ctrled.bind(entity)(result);
            result = result.Seconds;
            result = result.HOUR;
            result = source / result;
            result = echoed.bind(update)(result);
            offset['hours'] = result;
            backup = backup.bind(output)(foxtra, offset);
            offset = {};
            romeon = _closure1_slot18;
            offset['iconPath'] = romeon;
            romeon = yankee[sizing];
            romeon = kiloes.bind(entity)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            yankee = yankee[sizing];
            yankee = kiloes.bind(entity)(yankee);
            yankee = yankee.t;
            yankee = yankee./50eHh;
            foxtra = romeon.bind(foxtra)(yankee);
            verify = verify.HermesInternal;
            romeon = verify.concat;
            yankee = '';
            verify = ' — ';
            verify = romeon.bind(yankee)(foxtra, verify, backup);
            offset['text'] = verify;
            verify = new Array(1);
            verify[0] = offset;
            golfie = verify;
 1588:
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.drawBadges;
            michal = {};
            michal['canvas'] = option;
            michal['badges'] = golfie;
            michal['startPosition'] = oscard;
            michal['maxWidth'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot25 = report;
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = undefined;
        michal = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 287; continue _fun00007 }
 15:
                    option = michal.applicationImageSrc;
                    zuuluu = michal.entry;
                    var _closure4_slot0 = zuuluu;
                    report = michal.avatarSrcs;
                    var _closure4_slot1 = report;
                    golfie = michal.description;
                    var _closure4_slot2 = golfie;
                    golfie = michal.timestamp;
                    var _closure4_slot3 = golfie;
                    golfie = michal.colors;
                    var _closure4_slot4 = golfie;
                    golfie = michal.channelId;
                    offset = undefined;
                    SaveGenerator(address=80);
 78:
                    return offset;
 80:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 284; continue _fun00007 }
 89:
                    zuuluu = zuuluu.extra;
                    yankee = zuuluu.game_name;
                    tangon = _closure1_slot24;
                    option = tangon.bind(offset)(report, option);
                    verify = _closure1_slot0;
                    romeon = _closure1_slot2;
                    zuuluu = 14;
                    zuuluu = romeon[zuuluu];
                    report = verify.bind(offset)(zuuluu);
                    tangon = report.generateImageFromCanvas;
                    zuuluu = {};
                    zuuluu['assetsToLoad'] = option;
                    oscard = function(argFoo) { // Original name: drawImage
                        tangon = _closure1_slot25;
                        zuuluu = {};
                        michal = _closure4_slot3;
                        zuuluu['timestamp'] = michal;
                        michal = _closure4_slot4;
                        zuuluu['colors'] = michal;
                        michal = _closure4_slot2;
                        zuuluu['description'] = michal;
                        michal = _closure4_slot0;
                        zuuluu['entry'] = michal;
                        entity = _closure4_slot1;
                        entity = entity.length;
                        zuuluu['numAvatars'] = entity;
                        michal = undefined;
                        entity = argFoo;
                        entity = tangon.bind(michal)(entity, zuuluu);
                        return entity;
                    };
                    zuuluu['drawImage'] = oscard;
                    oscard = {};
                    option = 11;
                    option = romeon[option];
                    option = verify.bind(offset)(option);
                    option = option.DiscordCanvasExporterOutputFormats;
                    option = option.CloudUpload;
                    oscard['format'] = option;
                    option = 1;
                    oscard['quality'] = option;
                    option = global;
                    option = option.HermesInternal;
                    offset = option.concat;
                    verify = 'user-reacting-to-';
                    option = '.png';
                    verify = offset.bind(verify)(yankee, option);
                    option = verify.toLowerCase;
                    option = option.bind(verify)();
                    oscard['fileName'] = option;
                    option = 'png';
                    oscard['fileType'] = option;
                    oscard['channelId'] = golfie;
                    zuuluu['exportConfigs'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=272);
 270:
                    return zuuluu;
 272:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 281; continue _fun00007 }
 278:
                    return zuuluu;
 281:
                    return zuuluu;
 284:
                    return michal;
 287:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot0 = michal;
        entity = function() {
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        return entity;
    };
    tangon = tangon.bind(entity)();
    oscard = 19;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/content_inventory/memberlist/interactions/gamingImage.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['drawGamingImage'] = report;
    zuuluu['generateGamingContentImage'] = tangon;
    michal = function() { // Original name: generateGamingContentImageFromEntry
        entity = undefined;
        tangon = _closure1_slot26;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['generateGamingContentImageFromEntry'] = michal;
    return entity;
})();
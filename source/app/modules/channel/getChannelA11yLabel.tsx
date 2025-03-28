// app/modules/channel/getChannelA11yLabel.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function(argFoo) { // Original name: getPremiumChannelIconAllyLabel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.isSubscriptionGated;
            entity = entity.needSubscriptionToAccess;
            if(michal) { _fun00002_ip = 22; continue _fun00001 }
 18:
            michal = undefined;
            return michal;
 22:
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            if(entity) { _fun00002_ip = 89; continue _fun00001 }
 74:
            entity = michal.xI3TQU;
            entity = zuuluu.bind(tangon)(entity);
            _fun00002_ip = 102; continue _fun00001;
 89:
            michal = michal.oj+HOj;
            entity = zuuluu.bind(tangon)(michal);
 102:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    tangon = function(argFoo) { // Original name: getStatusLabel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot6;
            michal = michal.ONLINE;
            if(!(michal !== zuuluu)) { _fun00004_ip = 209; continue _fun00003 }
 23:
            michal = _closure1_slot6;
            michal = michal.IDLE;
            if(!(michal !== zuuluu)) { _fun00004_ip = 164; continue _fun00003 }
 40:
            michal = _closure1_slot6;
            michal = michal.DND;
            if(!(michal !== zuuluu)) { _fun00004_ip = 119; continue _fun00003 }
 54:
            michal = _closure1_slot6;
            michal = michal.INVISIBLE;
            if(!(michal !== zuuluu)) { _fun00004_ip = 74; continue _fun00003 }
 68:
            michal = '';
            return michal;
 74:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.humanizeStatus;
            michal = _closure1_slot6;
            michal = michal.INVISIBLE;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 119:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.humanizeStatus;
            michal = _closure1_slot6;
            michal = michal.DND;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 164:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.humanizeStatus;
            michal = _closure1_slot6;
            michal = michal.IDLE;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 209:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 6;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = tangon.bind(michal)(zuuluu);
            michal = zuuluu.humanizeStatus;
            entity = _closure1_slot6;
            entity = entity.ONLINE;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    report = report.THREAD_CHANNEL_TYPES;
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.ChannelTypes;
    var _closure1_slot5 = option;
    report = report.StatusTypes;
    var _closure1_slot6 = report;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/channel/getChannelA11yLabel.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: getChannelA11yLabel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            golfie = entity.channel;
            michal = entity.unread;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00006_ip = 22; continue _fun00005 }
 20:
            michal = false;
 22:
            verify = entity.mentionCount;
            if(!(verify === tangon)) { _fun00006_ip = 34; continue _fun00005 }
 32:
            verify = 0;
 34:
            update = entity.userCount;
            sizing = entity.embeddedActivitiesCount;
            oscard = entity.isSubscriptionGated;
            report = entity.needSubscriptionToAccess;
            option = _closure1_slot0;
            offset = _closure1_slot1;
            zuuluu = 5;
            zuuluu = offset[zuuluu];
            yankee = option.bind(tangon)(zuuluu);
            offset = yankee.computeChannelName;
            option = _closure1_slot4;
            zuuluu = _closure1_slot3;
            offset = offset.bind(yankee)(golfie, option, zuuluu);
            option = golfie.type;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.DM;
            if(!(zuuluu !== option)) { _fun00006_ip = 1223; continue _fun00005 }
 124:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.GROUP_DM;
            if(!(zuuluu !== option)) { _fun00006_ip = 1172; continue _fun00005 }
 141:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.GUILD_STORE;
            if(!(zuuluu !== option)) { _fun00006_ip = 1137; continue _fun00005 }
 158:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.GUILD_DIRECTORY;
            if(!(zuuluu !== option)) { _fun00006_ip = 1099; continue _fun00005 }
 175:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.GUILD_ANNOUNCEMENT;
            if(!(zuuluu !== option)) { _fun00006_ip = 1004; continue _fun00005 }
 192:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.GUILD_VOICE;
            if(!(zuuluu !== option)) { _fun00006_ip = 466; continue _fun00005 }
 209:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.GUILD_STAGE_VOICE;
            if(!(zuuluu !== option)) { _fun00006_ip = 430; continue _fun00005 }
 226:
            yankee = _closure1_slot2;
            option = yankee.has;
            zuuluu = golfie.type;
            option = option.bind(yankee)(zuuluu);
            zuuluu = 0;
            if(option) { _fun00006_ip = 337; continue _fun00005 }
 250:
            if(!(!(verify > zuuluu))) { _fun00006_ip = 302; continue _fun00005 }
 254:
            yankee = _closure1_slot0;
            romeon = _closure1_slot1;
            option = 4;
            option = romeon[option];
            option = yankee.bind(tangon)(option);
            yankee = option.t;
            if(michal) { _fun00006_ip = 292; continue _fun00005 }
 282:
            option = yankee.s0JADg;
            _fun00006_ip = 300; continue _fun00005;
 292:
            option = yankee.smf1CQ;
 300:
            _fun00006_ip = 335; continue _fun00005;
 302:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot1;
            yankee = 4;
            yankee = foxtra[yankee];
            yankee = romeon.bind(tangon)(yankee);
            yankee = yankee.t;
            option = yankee.g8ONMz;
 335:
            _fun00006_ip = 425; continue _fun00005;
 337:
            if(!(!(verify > zuuluu))) { _fun00006_ip = 389; continue _fun00005 }
 341:
            yankee = _closure1_slot0;
            romeon = _closure1_slot1;
            zuuluu = 4;
            zuuluu = romeon[zuuluu];
            zuuluu = yankee.bind(tangon)(zuuluu);
            yankee = zuuluu.t;
            if(michal) { _fun00006_ip = 379; continue _fun00005 }
 369:
            zuuluu = yankee.0nZpiI;
            _fun00006_ip = 387; continue _fun00005;
 379:
            zuuluu = yankee.YlVvmZ;
 387:
            _fun00006_ip = 422; continue _fun00005;
 389:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot1;
            yankee = 4;
            yankee = foxtra[yankee];
            yankee = romeon.bind(tangon)(yankee);
            yankee = yankee.t;
            zuuluu = yankee.ZL7+Iy;
 422:
            option = zuuluu;
 425:
            _fun00006_ip = 1270; continue _fun00005;
 430:
            yankee = _closure1_slot0;
            romeon = _closure1_slot1;
            zuuluu = 4;
            zuuluu = romeon[zuuluu];
            zuuluu = yankee.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            option = zuuluu.TPPk2d;
            _fun00006_ip = 1270; continue _fun00005;
 466:
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot1;
            output = 4;
            romeon = zuuluu[output];
            romeon = yankee.bind(tangon)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.formatToPlainString;
            zuuluu = zuuluu[output];
            zuuluu = yankee.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            yankee = zuuluu.bkpadH;
            zuuluu = {};
            backup = golfie.name;
            zuuluu['channelName'] = backup;
            zuuluu = romeon.bind(foxtra)(yankee, zuuluu);
            yankee = new Array(1);
            yankee[0] = zuuluu;
            romeon = 0;
            if(!(verify > romeon)) { _fun00006_ip = 622; continue _fun00005 }
 550:
            foxtra = yankee.push;
            backup = _closure1_slot0;
            zuuluu = _closure1_slot1;
            kiloes = zuuluu[output];
            kiloes = backup.bind(tangon)(kiloes);
            result = kiloes.intl;
            kiloes = result.formatToPlainString;
            zuuluu = zuuluu[output];
            zuuluu = backup.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            backup = zuuluu.3l1GOz;
            zuuluu = {};
            zuuluu['mentionCount'] = verify;
            zuuluu = kiloes.bind(result)(backup, zuuluu);
            zuuluu = foxtra.bind(yankee)(zuuluu);
 622:
            if(!michal) { _fun00006_ip = 689; continue _fun00005 }
 625:
            foxtra = yankee.push;
            result = _closure1_slot0;
            zuuluu = _closure1_slot1;
            backup = zuuluu[output];
            backup = result.bind(tangon)(backup);
            kiloes = backup.intl;
            backup = kiloes.string;
            zuuluu = zuuluu[output];
            zuuluu = result.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.x5zAGR;
            zuuluu = backup.bind(kiloes)(zuuluu);
            zuuluu = foxtra.bind(yankee)(zuuluu);
 689:
            zuuluu = null;
            if(!(zuuluu != update)) { _fun00006_ip = 863; continue _fun00005 }
 698:
            echoed = golfie.userLimit;
            if(!(zuuluu != echoed)) { _fun00006_ip = 712; continue _fun00005 }
 708:
            if(!(!(echoed > romeon))) { _fun00006_ip = 786; continue _fun00005 }
 712:
            foxtra = yankee.push;
            backup = _closure1_slot0;
            golfie = _closure1_slot1;
            kiloes = golfie[output];
            kiloes = backup.bind(tangon)(kiloes);
            result = kiloes.intl;
            kiloes = result.formatToPlainString;
            golfie = golfie[output];
            golfie = backup.bind(tangon)(golfie);
            golfie = golfie.t;
            backup = golfie.GNIiAA;
            golfie = {};
            golfie['userCount'] = update;
            golfie = kiloes.bind(result)(backup, golfie);
            golfie = foxtra.bind(yankee)(golfie);
            _fun00006_ip = 863; continue _fun00005;
 786:
            foxtra = yankee.push;
            backup = _closure1_slot0;
            golfie = _closure1_slot1;
            kiloes = golfie[output];
            kiloes = backup.bind(tangon)(kiloes);
            result = kiloes.intl;
            kiloes = result.formatToPlainString;
            golfie = golfie[output];
            golfie = backup.bind(tangon)(golfie);
            golfie = golfie.t;
            backup = golfie.6qgTOD;
            golfie = {};
            golfie['userCount'] = update;
            golfie['limit'] = echoed;
            golfie = kiloes.bind(result)(backup, golfie);
            golfie = foxtra.bind(yankee)(golfie);
 863:
            golfie = zuuluu != sizing;
            if(!golfie) { _fun00006_ip = 874; continue _fun00005 }
 870:
            golfie = sizing > romeon;
 874:
            if(!golfie) { _fun00006_ip = 951; continue _fun00005 }
 877:
            romeon = yankee.push;
            foxtra = _closure1_slot0;
            golfie = _closure1_slot1;
            backup = golfie[output];
            backup = foxtra.bind(tangon)(backup);
            kiloes = backup.intl;
            backup = kiloes.formatToPlainString;
            golfie = golfie[output];
            golfie = foxtra.bind(tangon)(golfie);
            golfie = golfie.t;
            foxtra = golfie.O6PLYW;
            golfie = {};
            golfie['activitiesCount'] = sizing;
            golfie = backup.bind(kiloes)(foxtra, golfie);
            golfie = romeon.bind(yankee)(golfie);
 951:
            romeon = _closure1_slot7;
            golfie = {};
            golfie['isSubscriptionGated'] = oscard;
            golfie['needSubscriptionToAccess'] = report;
            golfie = romeon.bind(tangon)(golfie);
            if(!(zuuluu != golfie)) { _fun00006_ip = 986; continue _fun00005 }
 976:
            zuuluu = yankee.push;
            zuuluu = zuuluu.bind(yankee)(golfie);
 986:
            golfie = yankee.join;
            zuuluu = ', ';
            zuuluu = golfie.bind(yankee)(zuuluu);
            return zuuluu;
 1004:
            zuuluu = 0;
            if(!(!(verify > zuuluu))) { _fun00006_ip = 1058; continue _fun00005 }
 1010:
            golfie = _closure1_slot0;
            yankee = _closure1_slot1;
            zuuluu = 4;
            zuuluu = yankee[zuuluu];
            zuuluu = golfie.bind(tangon)(zuuluu);
            golfie = zuuluu.t;
            if(michal) { _fun00006_ip = 1048; continue _fun00005 }
 1038:
            zuuluu = golfie.WJ3MPj;
            _fun00006_ip = 1056; continue _fun00005;
 1048:
            zuuluu = golfie.VM7z8f;
 1056:
            _fun00006_ip = 1091; continue _fun00005;
 1058:
            yankee = _closure1_slot0;
            romeon = _closure1_slot1;
            golfie = 4;
            golfie = romeon[golfie];
            golfie = yankee.bind(tangon)(golfie);
            golfie = golfie.t;
            zuuluu = golfie.sDKIpq;
 1091:
            option = zuuluu;
            _fun00006_ip = 1270; continue _fun00005;
 1099:
            golfie = _closure1_slot0;
            yankee = _closure1_slot1;
            zuuluu = 4;
            zuuluu = yankee[zuuluu];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            option = zuuluu.92EAFx;
            _fun00006_ip = 1270; continue _fun00005;
 1137:
            golfie = _closure1_slot0;
            yankee = _closure1_slot1;
            zuuluu = 4;
            zuuluu = yankee[zuuluu];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            option = zuuluu.Bo4msr;
            _fun00006_ip = 1270; continue _fun00005;
 1172:
            golfie = _closure1_slot0;
            yankee = _closure1_slot1;
            zuuluu = 4;
            zuuluu = yankee[zuuluu];
            zuuluu = golfie.bind(tangon)(zuuluu);
            golfie = zuuluu.t;
            if(michal) { _fun00006_ip = 1210; continue _fun00005 }
 1200:
            zuuluu = golfie.lts3LS;
            _fun00006_ip = 1218; continue _fun00005;
 1210:
            zuuluu = golfie.fxxUo6;
 1218:
            option = zuuluu;
            _fun00006_ip = 1270; continue _fun00005;
 1223:
            golfie = _closure1_slot0;
            yankee = _closure1_slot1;
            zuuluu = 4;
            zuuluu = yankee[zuuluu];
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.t;
            if(michal) { _fun00006_ip = 1259; continue _fun00005 }
 1251:
            michal = zuuluu.fYqXVV;
            _fun00006_ip = 1267; continue _fun00005;
 1259:
            michal = zuuluu.F2MZsr;
 1267:
            option = michal;
 1270:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            michal = golfie[michal];
            michal = zuuluu.bind(tangon)(michal);
            golfie = michal.intl;
            zuuluu = golfie.formatToPlainString;
            michal = {};
            michal['channelName'] = offset;
            michal['mentionCount'] = verify;
            michal = zuuluu.bind(golfie)(option, michal);
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = _closure1_slot7;
            entity = {};
            entity['isSubscriptionGated'] = oscard;
            entity['needSubscriptionToAccess'] = report;
            michal = michal.bind(tangon)(entity);
            entity = null;
            if(!(entity != michal)) { _fun00006_ip = 1363; continue _fun00005 }
 1353:
            entity = zuuluu.push;
            entity = entity.bind(zuuluu)(michal);
 1363:
            michal = zuuluu.join;
            entity = ', ';
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['default'] = report;
    zuuluu['getStatusLabel'] = tangon;
    michal = function(argFoo) { // Original name: getChannelA11yHint
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = michal.channel;
            zuuluu = michal.muted;
            report = michal.userStatus;
            michal = true;
            if(!(michal !== zuuluu)) { _fun00008_ip = 113; continue _fun00007 }
 26:
            tangon = new Array(0);
            zuuluu = entity.type;
            michal = _closure1_slot5;
            michal = michal.DM;
            if(!(zuuluu === michal)) { _fun00008_ip = 79; continue _fun00007 }
 52:
            michal = null;
            if(!(michal != report)) { _fun00008_ip = 79; continue _fun00007 }
 58:
            michal = tangon.push;
            zuuluu = _closure1_slot8;
            entity = undefined;
            entity = zuuluu.bind(entity)(report);
            entity = michal.bind(tangon)(entity);
 79:
            michal = tangon.length;
            entity = 0;
            michal = michal > entity;
            entity = undefined;
            if(!michal) { _fun00008_ip = 111; continue _fun00007 }
 95:
            zuuluu = tangon.join;
            michal = ', ';
            entity = zuuluu.bind(tangon)(michal);
 111:
            return entity;
 113:
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 4;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.C4zCMT;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getChannelA11yHint'] = michal;
    return entity;
})();
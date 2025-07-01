// app/modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    michal = function(argFoo, argBar) { // Original name: getChannelIconData
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            zuuluu = report.type;
            entity = _closure1_slot7;
            entity = entity.GUILD_CATEGORY;
            if(!(zuuluu !== entity)) { _fun00002_ip = 64; continue _fun00001 }
 25:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 13;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getChannelIconWithGuild;
            entity = argBar;
            entity = zuuluu.bind(tangon)(report, entity);
            _fun00002_ip = 86; continue _fun00001;
 64:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 12;
            zuuluu = zuuluu[michal];
            michal = undefined;
            entity = tangon.bind(michal)(zuuluu);
 86:
            return entity;
        }
    };
    var _closure1_slot9 = michal;
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
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.ChannelTypes;
    var _closure1_slot7 = option;
    report = report.DEFAULT_ROLE_COLOR;
    var _closure1_slot8 = report;
    report = 14;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/interaction_components/native/NativeSearchableSelectActionComponentUtils.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo, argBar) { // Original name: transformSearchableSelectOptions
        tangon = argFoo;
        oscard = argBar;
        var _closure2_slot0 = oscard;
        report = _closure1_slot5;
        zuuluu = report.getGuild;
        zuuluu = zuuluu.bind(report)(oscard);
        var _closure2_slot1 = zuuluu;
        zuuluu = tangon.map;
        michal = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                michal = tangon.type;
                oscard = _closure1_slot0;
                entity = _closure1_slot2;
                golfie = 5;
                entity = entity[golfie];
                report = undefined;
                entity = oscard.bind(report)(entity);
                entity = entity.SelectOptionType;
                entity = entity.USER;
                if(!(entity !== michal)) { _fun00004_ip = 725; continue _fun00003 }
 52:
                oscard = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[golfie];
                entity = oscard.bind(report)(entity);
                entity = entity.SelectOptionType;
                entity = entity.ROLE;
                if(!(entity !== michal)) { _fun00004_ip = 309; continue _fun00003 }
 88:
                oscard = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[golfie];
                entity = oscard.bind(report)(entity);
                entity = entity.SelectOptionType;
                entity = entity.CHANNEL;
                if(!(entity !== michal)) { _fun00004_ip = 125; continue _fun00003 }
 121:
                entity = null;
                return entity;
 125:
                romeon = _closure2_slot1;
                oscard = _closure1_slot3;
                michal = oscard.getChannel;
                entity = tangon.value;
                yankee = michal.bind(oscard)(entity);
                michal = null;
                entity = tangon;
                if(!(michal != yankee)) { _fun00004_ip = 307; continue _fun00003 }
 163:
                michal = {};
                sizing = michal;
                kiloes = tangon;
                oscard = copyDataProperties(sizing, kiloes);
                golfie = _closure1_slot0;
                offset = _closure1_slot2;
                oscard = 7;
                oscard = offset[oscard];
                verify = golfie.bind(report)(oscard);
                option = verify.ensureAvatarSource;
                oscard = _closure1_slot9;
                oscard = oscard.bind(report)(yankee, romeon);
                oscard = option.bind(verify)(oscard);
                option = oscard.uri;
                oscard = 'iconSrc';
                michal[oscard] = option;
                oscard = 10;
                oscard = offset[oscard];
                option = golfie.bind(report)(oscard);
                golfie = option.hex2int;
                verify = _closure1_slot1;
                oscard = 11;
                oscard = offset[oscard];
                oscard = verify.bind(report)(oscard);
                oscard = oscard.unsafe_rawColors;
                oscard = oscard.PRIMARY_330;
                golfie = golfie.bind(option)(oscard);
                oscard = 4278190080.0;
                golfie = oscard | golfie;
                oscard = 'iconColor';
                michal[oscard] = golfie;
                entity = michal;
 307:
                return entity;
 309:
                option = _closure2_slot1;
                offset = null;
                entity = offset != option;
                golfie = null;
                if(!entity) { _fun00004_ip = 353; continue _fun00003 }
 327:
                verify = _closure1_slot4;
                oscard = verify.getRole;
                michal = option.id;
                entity = tangon.value;
                golfie = oscard.bind(verify)(michal, entity);
 353:
                entity = tangon;
                if(!(offset != golfie)) { _fun00004_ip = 723; continue _fun00003 }
 363:
                entity = tangon;
                if(!(offset != option)) { _fun00004_ip = 723; continue _fun00003 }
 373:
                oscard = _closure1_slot0;
                michal = _closure1_slot2;
                verify = 8;
                michal = michal[verify];
                oscard = oscard.bind(report)(michal);
                michal = oscard.canGuildUseRoleIcons;
                oscard = michal.bind(oscard)(option, golfie);
                michal = null;
                if(!oscard) { _fun00004_ip = 438; continue _fun00003 }
 410:
                option = _closure1_slot0;
                oscard = _closure1_slot2;
                oscard = oscard[verify];
                option = option.bind(report)(oscard);
                oscard = option.getRoleIconData;
                michal = oscard.bind(option)(golfie);
 438:
                if(!(offset != michal)) { _fun00004_ip = 468; continue _fun00003 }
 442:
                option = michal.customIconSrc;
                oscard = michal.unicodeEmoji;
                if(!(offset == oscard)) { _fun00004_ip = 649; continue _fun00003 }
 461:
                if(!(offset == option)) { _fun00004_ip = 623; continue _fun00003 }
 468:
                michal = {};
                sizing = michal;
                kiloes = tangon;
                verify = copyDataProperties(sizing, kiloes);
                yankee = _closure1_slot0;
                backup = _closure1_slot2;
                verify = 7;
                verify = backup[verify];
                romeon = yankee.bind(report)(verify);
                yankee = romeon.ensureAvatarSource;
                foxtra = _closure1_slot1;
                verify = 9;
                verify = backup[verify];
                verify = foxtra.bind(report)(verify);
                verify = yankee.bind(romeon)(verify);
                yankee = verify.uri;
                verify = 'iconSrc';
                michal[verify] = yankee;
                verify = golfie.colorString;
                if(!(offset == verify)) { _fun00004_ip = 558; continue _fun00003 }
 552:
                verify = _closure1_slot8;
                _fun00004_ip = 595; continue _fun00003;
 558:
                yankee = _closure1_slot0;
                romeon = _closure1_slot2;
                offset = 10;
                offset = romeon[offset];
                yankee = yankee.bind(report)(offset);
                offset = yankee.hex2int;
                golfie = golfie.colorString;
                verify = offset.bind(yankee)(golfie);
 595:
                golfie = 4278190080.0;
                verify = golfie | verify;
                golfie = 'iconColor';
                michal[golfie] = verify;
                entity = michal;
                _fun00004_ip = 723; continue _fun00003;
 623:
                michal = {};
                sizing = michal;
                kiloes = tangon;
                golfie = copyDataProperties(sizing, kiloes);
                golfie = 'iconSrc';
                michal[golfie] = option;
                entity = michal;
                _fun00004_ip = 723; continue _fun00003;
 649:
                michal = {};
                sizing = michal;
                kiloes = tangon;
                golfie = copyDataProperties(sizing, kiloes);
                golfie = {};
                option = oscard.id;
                golfie['id'] = option;
                option = oscard.name;
                golfie['name'] = option;
                option = oscard.animated;
                golfie['animated'] = option;
                option = oscard.url;
                golfie['src'] = option;
                oscard = oscard.surrogates;
                golfie['surrogates'] = oscard;
                oscard = 'iconEmoji';
                michal[oscard] = golfie;
                entity = michal;
 723:
                return entity;
 725:
                option = _closure2_slot0;
                oscard = _closure1_slot6;
                michal = oscard.getUser;
                entity = tangon.value;
                golfie = michal.bind(oscard)(entity);
                michal = null;
                entity = tangon;
                if(!(michal != golfie)) { _fun00004_ip = 836; continue _fun00003 }
 761:
                michal = {};
                sizing = michal;
                kiloes = tangon;
                tangon = copyDataProperties(sizing, kiloes);
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 7;
                zuuluu = oscard[zuuluu];
                report = tangon.bind(report)(zuuluu);
                tangon = report.ensureAvatarSource;
                oscard = golfie.getAvatarSource;
                zuuluu = false;
                zuuluu = oscard.bind(golfie)(option, zuuluu);
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = zuuluu.uri;
                zuuluu = 'iconSrc';
                michal[zuuluu] = tangon;
                entity = michal;
 836:
                return entity;
            }
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.filter;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        entity = 6;
        tangon = tangon[entity];
        entity = undefined;
        entity = report.bind(entity)(tangon);
        entity = entity.isNotNullish;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['transformSearchableSelectOptions'] = tangon;
    zuuluu['getChannelIconData'] = michal;
    return entity;
})();
// app/modules/impersonate/ImpersonateActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    report = function(argFoo, argBar) { // Original name: updateImpersonating
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            option = argBar;
            tangon = _closure1_slot10;
            michal = tangon.getData;
            verify = michal.bind(tangon)(zuuluu);
            michal = null;
            michal = michal != verify;
            if(!michal) { _fun00002_ip = 47; continue _fun00001 }
 33:
            report = verify.type;
            tangon = option.type;
            michal = report === tangon;
 47:
            if(!michal) { _fun00002_ip = 281; continue _fun00001 }
 53:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 10;
            tangon = oscard[michal];
            michal = undefined;
            yankee = report.bind(michal)(tangon);
            offset = yankee.track;
            tangon = _closure1_slot13;
            golfie = tangon.VIEW_AS_ROLES_SELECTED;
            tangon = {};
            romeon = global;
            backup = romeon.Object;
            foxtra = backup.keys;
            romeon = verify.roles;
            romeon = foxtra.bind(backup)(romeon);
            romeon = romeon.length;
            tangon['num_roles'] = romeon;
            backup = _closure1_slot0;
            romeon = 11;
            romeon = oscard[romeon];
            foxtra = backup.bind(michal)(romeon);
            romeon = foxtra.collectGuildAnalyticsMetadata;
            kiloes = romeon.bind(foxtra)(zuuluu);
            sizing = tangon;
            romeon = copyDataProperties(sizing, kiloes);
            foxtra = verify.type;
            romeon = 12;
            romeon = oscard[romeon];
            romeon = backup.bind(michal)(romeon);
            romeon = romeon.ImpersonateType;
            romeon = romeon.NEW_MEMBER;
            foxtra = foxtra === romeon;
            romeon = 'is_viewing_as_member';
            tangon[romeon] = foxtra;
            tangon = offset.bind(yankee)(golfie, tangon);
            tangon = 13;
            tangon = oscard[tangon];
            oscard = report.bind(michal)(tangon);
            report = oscard.dispatch;
            tangon = {};
            golfie = 'IMPERSONATE_UPDATE';
            tangon['type'] = golfie;
            tangon['guildId'] = zuuluu;
            golfie = {};
            sizing = golfie;
            kiloes = verify;
            verify = copyDataProperties(sizing, kiloes);
            sizing = golfie;
            kiloes = option;
            option = copyDataProperties(sizing, kiloes);
            tangon['data'] = golfie;
            tangon = report.bind(oscard)(tangon);
            entity = _closure1_slot16;
            entity = entity.bind(michal)(zuuluu);
 281:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot15 = report;
    entity = function(argFoo) { // Original name: puntFromSelectedChannelIfInaccessible
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            michal = _closure1_slot8;
            entity = michal.getChannelId;
            report = entity.bind(michal)(oscard);
            michal = _closure1_slot3;
            entity = michal.getChannel;
            golfie = entity.bind(michal)(report);
            michal = null;
            if(!(michal != report)) { _fun00004_ip = 55; continue _fun00003 }
 41:
            zuuluu = _closure1_slot14;
            entity = undefined;
            entity = zuuluu.bind(entity)(report);
            if(entity) { _fun00004_ip = 157; continue _fun00003 }
 55:
            report = _closure1_slot7;
            zuuluu = report.can;
            entity = _closure1_slot11;
            entity = entity.VIEW_CHANNEL;
            entity = zuuluu.bind(report)(entity, golfie);
            if(entity) { _fun00004_ip = 157; continue _fun00003 }
 84:
            zuuluu = _closure1_slot4;
            entity = zuuluu.getDefaultChannel;
            entity = entity.bind(zuuluu)(oscard);
            if(!(michal != entity)) { _fun00004_ip = 157; continue _fun00003 }
 103:
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 14;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            michal = zuuluu.transitionTo;
            report = _closure1_slot12;
            tangon = report.CHANNEL;
            entity = entity.id;
            entity = tangon.bind(report)(oscard, entity);
            entity = michal.bind(zuuluu)(entity);
 157:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    tangon = function(argFoo, argBar, argBaz) { // Original name: updateImpersonatedChannels
        tangon = argFoo;
        option = argBar;
        oscard = argBaz;
        entity = global;
        golfie = entity.Set;
        report = _closure1_slot9;
        zuuluu = report.getOptedInChannels;
        offset = zuuluu.bind(report)(tangon);
        report = golfie.prototype;
        report = Object.create(report, {constructor: {value: golfie}});
        yankee = report;
        zuuluu = new yankee[golfie](offset, verify);
        report = zuuluu instanceof Object ? zuuluu : report;
        var _closure2_slot0 = report;
        golfie = option.forEach;
        zuuluu = function(argFoo) {
            zuuluu = _closure2_slot0;
            michal = zuuluu.add;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu = golfie.bind(option)(zuuluu);
        zuuluu = oscard.forEach;
        michal = function(argFoo) {
            zuuluu = _closure2_slot0;
            michal = zuuluu.delete;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(oscard)(michal);
        zuuluu = _closure1_slot15;
        michal = {};
        golfie = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 12;
        oscard = oscard[entity];
        entity = undefined;
        oscard = golfie.bind(entity)(oscard);
        oscard = oscard.ImpersonateType;
        oscard = oscard.NEW_MEMBER;
        michal['type'] = oscard;
        michal['optInChannels'] = report;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    var _closure1_slot17 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot7 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot8 = oscard;
    oscard = 6;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot9 = oscard;
    oscard = 7;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot10 = oscard;
    oscard = 8;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.Permissions;
    var _closure1_slot11 = verify;
    verify = oscard.Routes;
    var _closure1_slot12 = verify;
    oscard = oscard.AnalyticEvents;
    var _closure1_slot13 = oscard;
    oscard = 9;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.isStaticChannelRoute;
    var _closure1_slot14 = oscard;
    oscard = 15;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/impersonate/ImpersonateActionCreators.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo, argBar) { // Original name: startImpersonating
        zuuluu = argFoo;
        golfie = argBar;
        report = _closure1_slot1;
        oscard = _closure1_slot2;
        entity = 10;
        tangon = oscard[entity];
        entity = undefined;
        offset = report.bind(entity)(tangon);
        verify = offset.track;
        tangon = _closure1_slot13;
        option = tangon.VIEW_AS_ROLES_SELECTED;
        tangon = {};
        yankee = global;
        foxtra = yankee.Object;
        romeon = foxtra.keys;
        yankee = golfie.roles;
        yankee = romeon.bind(foxtra)(yankee);
        yankee = yankee.length;
        tangon['num_roles'] = yankee;
        foxtra = _closure1_slot0;
        yankee = 11;
        yankee = oscard[yankee];
        romeon = foxtra.bind(entity)(yankee);
        yankee = romeon.collectGuildAnalyticsMetadata;
        backup = yankee.bind(romeon)(zuuluu);
        kiloes = tangon;
        yankee = copyDataProperties(kiloes, backup);
        romeon = golfie.type;
        yankee = 12;
        yankee = oscard[yankee];
        yankee = foxtra.bind(entity)(yankee);
        yankee = yankee.ImpersonateType;
        yankee = yankee.NEW_MEMBER;
        romeon = romeon === yankee;
        yankee = 'is_viewing_as_member';
        tangon[yankee] = romeon;
        tangon = verify.bind(offset)(option, tangon);
        tangon = 13;
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.dispatch;
        tangon = {};
        option = 'IMPERSONATE_UPDATE';
        tangon['type'] = option;
        tangon['guildId'] = zuuluu;
        tangon['data'] = golfie;
        tangon = report.bind(oscard)(tangon);
        michal = _closure1_slot16;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    zuuluu['startImpersonating'] = oscard;
    zuuluu['updateImpersonating'] = report;
    report = function(argFoo) { // Original name: stopImpersonating
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 13;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'IMPERSONATE_STOP';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['stopImpersonating'] = report;
    zuuluu['updateImpersonatedChannels'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateImpersonatedRoles
        tangon = argFoo;
        golfie = argBar;
        zuuluu = _closure1_slot6;
        entity = zuuluu.getRoles;
        entity = entity.bind(zuuluu)(tangon);
        var _closure2_slot0 = entity;
        zuuluu = function(argFoo, argBar) { // Original name: optIntoPrivateChannelsForGrantedRolesForPreview
            golfie = argFoo;
            var _closure3_slot0 = golfie;
            tangon = _closure1_slot4;
            zuuluu = tangon.getSelectableChannelIds;
            verify = zuuluu.bind(tangon)(golfie);
            zuuluu = new Array(0);
            option = 0;
            offset = zuuluu;
            option = arraySpread(offset, verify, option);
            oscard = _closure1_slot4;
            tangon = oscard.getVocalChannelIds;
            verify = tangon.bind(oscard)(golfie);
            offset = zuuluu;
            tangon = arraySpread(offset, verify, option);
            var _closure3_slot1 = zuuluu;
            zuuluu = global;
            report = zuuluu.Array;
            tangon = report.from;
            zuuluu = argBar;
            zuuluu = tangon.bind(report)(zuuluu);
            var _closure3_slot2 = zuuluu;
            zuuluu = _closure1_slot4;
            michal = zuuluu.addConditionalChangeListener;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    oscard = _closure1_slot5;
                    report = oscard.getSelfMember;
                    tangon = _closure3_slot0;
                    report = report.bind(oscard)(tangon);
                    var _closure4_slot0 = report;
                    tangon = null;
                    if(!(tangon != report)) { _fun00006_ip = 172; continue _fun00005 }
 40:
                    oscard = _closure3_slot2;
                    report = oscard.some;
                    tangon = function(argFoo) {
                        entity = _closure4_slot0;
                        zuuluu = entity.roles;
                        michal = zuuluu.includes;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    tangon = report.bind(oscard)(tangon);
                    if(tangon) { _fun00006_ip = 168; continue _fun00005 }
 63:
                    report = _closure1_slot4;
                    tangon = report.getSelectableChannelIds;
                    verify = _closure3_slot0;
                    yankee = tangon.bind(report)(verify);
                    oscard = new Array(0);
                    tangon = 0;
                    romeon = oscard;
                    offset = 0;
                    offset = arraySpread(romeon, yankee, offset);
                    option = _closure1_slot4;
                    report = option.getVocalChannelIds;
                    yankee = report.bind(option)(verify);
                    romeon = oscard;
                    report = arraySpread(romeon, yankee, offset);
                    report = oscard.filter;
                    zuuluu = function(argFoo) {
                        zuuluu = _closure3_slot1;
                        michal = zuuluu.includes;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    report = report.bind(oscard)(zuuluu);
                    zuuluu = report.length;
                    if(!(zuuluu > tangon)) { _fun00006_ip = 164; continue _fun00005 }
 143:
                    tangon = _closure1_slot17;
                    zuuluu = _closure3_slot0;
                    michal = undefined;
                    entity = new Array(0);
                    entity = tangon.bind(michal)(zuuluu, report, entity);
 164:
                    entity = false;
                    return entity;
 168:
                    entity = true;
                    return entity;
 172:
                    entity = false;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(tangon, golfie);
        report = {};
        var _closure2_slot1 = report;
        zuuluu = golfie.forEach;
        michal = function(argFoo) {
            zuuluu = argFoo;
            michal = _closure2_slot1;
            entity = _closure2_slot0;
            entity = entity[zuuluu];
            michal[zuuluu] = entity;
            return entity;
        };
        michal = zuuluu.bind(golfie)(michal);
        zuuluu = _closure1_slot15;
        michal = {};
        golfie = _closure1_slot0;
        option = _closure1_slot2;
        oscard = 12;
        oscard = option[oscard];
        oscard = golfie.bind(entity)(oscard);
        oscard = oscard.ImpersonateType;
        oscard = oscard.NEW_MEMBER;
        michal['type'] = oscard;
        michal['roles'] = report;
        michal = zuuluu.bind(entity)(tangon, michal);
        return entity;
    };
    zuuluu['updateImpersonatedRoles'] = tangon;
    michal = function(argFoo, argBar) { // Original name: updateImpersonatedData
        tangon = _closure1_slot15;
        zuuluu = {};
        report = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 12;
        michal = michal[entity];
        entity = undefined;
        michal = report.bind(entity)(michal);
        michal = michal.ImpersonateType;
        michal = michal.NEW_MEMBER;
        zuuluu['type'] = michal;
        oscard = argBar;
        golfie = zuuluu;
        michal = copyDataProperties(golfie, oscard);
        michal = argFoo;
        michal = tangon.bind(entity)(michal, zuuluu);
        return entity;
    };
    zuuluu['updateImpersonatedData'] = michal;
    return entity;
})();
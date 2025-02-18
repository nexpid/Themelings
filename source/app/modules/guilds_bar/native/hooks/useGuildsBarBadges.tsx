// app/modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = ['guildActivityIndicatorSource'];
    var _closure1_slot3 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.StyleSheet;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.GuildFeatures;
    var _closure1_slot12 = golfie;
    tangon = tangon.Permissions;
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot14 = tangon;
    golfie = option.create;
    tangon = {};
    verify = {'position': 'absolute', 'top': 1, 'right': 9, 'backgroundColor': 'transparent', 'borderColor': 'transparent'};
    tangon['topRightBadge'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: useGuildsBarBadges
        report = argFoo;
        var _closure2_slot0 = report;
        golfie = _closure1_slot0;
        offset = _closure1_slot2;
        zuuluu = 11;
        entity = offset[zuuluu];
        oscard = undefined;
        romeon = golfie.bind(oscard)(entity);
        yankee = romeon.useStateFromStores;
        entity = _closure1_slot9;
        verify = new Array(1);
        verify[0] = entity;
        option = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot9;
                michal = tangon.getGuild;
                entity = _closure2_slot0;
                report = michal.bind(tangon)(entity);
                entity = null;
                tangon = entity == report;
                michal = undefined;
                if(tangon) { _fun00002_ip = 56; continue _fun00001 }
 35:
                tangon = report.hasFeature;
                zuuluu = _closure1_slot12;
                zuuluu = zuuluu.MEMBER_VERIFICATION_MANUAL_APPROVAL;
                michal = tangon.bind(report)(zuuluu);
 56:
                entity = entity != michal;
                if(!entity) { _fun00002_ip = 66; continue _fun00001 }
 63:
                entity = michal;
 66:
                return entity;
            }
        };
        option = yankee.bind(romeon)(verify, option);
        var _closure2_slot1 = option;
        verify = offset[zuuluu];
        foxtra = golfie.bind(oscard)(verify);
        romeon = foxtra.useStateFromStores;
        verify = _closure1_slot7;
        yankee = new Array(3);
        yankee[0] = verify;
        verify = _closure1_slot11;
        yankee[1] = verify;
        verify = _closure1_slot8;
        yankee[2] = verify;
        verify = new Array(2);
        verify[0] = report;
        verify[1] = option;
        option = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot1;
                if(!entity) { _fun00004_ip = 146; continue _fun00003 }
 13:
                report = _closure1_slot7;
                tangon = report.getRequest;
                entity = _closure2_slot0;
                entity = tangon.bind(report)(entity);
                report = _closure1_slot11;
                tangon = report.getCurrentUser;
                report = tangon.bind(report)();
                tangon = null;
                if(!(tangon != report)) { _fun00004_ip = 146; continue _fun00003 }
 54:
                if(!(tangon != entity)) { _fun00004_ip = 146; continue _fun00003 }
 58:
                oscard = entity.userId;
                report = report.id;
                if(!(oscard === report)) { _fun00004_ip = 146; continue _fun00003 }
 72:
                golfie = _closure1_slot8;
                oscard = golfie.getMember;
                report = _closure2_slot0;
                zuuluu = entity.userId;
                zuuluu = oscard.bind(golfie)(report, zuuluu);
                if(!(tangon != zuuluu)) { _fun00004_ip = 150; continue _fun00003 }
 101:
                zuuluu = zuuluu.isPending;
                if(zuuluu) { _fun00004_ip = 150; continue _fun00003 }
 110:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 12;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.isActionedAndNotAcked;
                michal = michal.bind(zuuluu)(entity);
                if(michal) { _fun00004_ip = 150; continue _fun00003 }
 146:
                michal = undefined;
                return michal;
 150:
                entity = entity.applicationStatus;
                return entity;
            }
        };
        verify = romeon.bind(foxtra)(yankee, option, verify);
        zuuluu = offset[zuuluu];
        yankee = golfie.bind(oscard)(zuuluu);
        option = yankee.useStateFromStores;
        zuuluu = _closure1_slot10;
        golfie = new Array(3);
        golfie[0] = zuuluu;
        golfie[1] = entity;
        entity = _closure1_slot6;
        golfie[2] = entity;
        zuuluu = new Array(1);
        zuuluu[0] = report;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = _closure1_slot9;
                zuuluu = tangon.getGuild;
                michal = _closure2_slot0;
                golfie = zuuluu.bind(tangon)(michal);
                zuuluu = null;
                if(!(zuuluu != golfie)) { _fun00006_ip = 59; continue _fun00005 }
 30:
                oscard = _closure1_slot10;
                tangon = oscard.can;
                michal = _closure1_slot13;
                michal = michal.MANAGE_GUILD;
                michal = tangon.bind(oscard)(michal, golfie);
                if(michal) { _fun00006_ip = 63; continue _fun00005 }
 59:
                michal = false;
                return michal;
 63:
                tangon = _closure1_slot6;
                michal = tangon.getGuildIncident;
                entity = _closure2_slot0;
                tangon = michal.bind(tangon)(entity);
                oscard = zuuluu == golfie;
                entity = undefined;
                if(oscard) { _fun00006_ip = 127; continue _fun00005 }
 91:
                oscard = golfie.hasFeature;
                oscard = zuuluu == oscard;
                entity = undefined;
                if(oscard) { _fun00006_ip = 127; continue _fun00005 }
 106:
                oscard = golfie.hasFeature;
                report = _closure1_slot12;
                report = report.INVITES_DISABLED;
                entity = oscard.bind(golfie)(report);
 127:
                if(entity) { _fun00006_ip = 219; continue _fun00005 }
 130:
                report = zuuluu == tangon;
                michal = undefined;
                if(report) { _fun00006_ip = 145; continue _fun00005 }
 139:
                michal = tangon.invitesDisabledUntil;
 145:
                michal = zuuluu != michal;
                if(!michal) { _fun00006_ip = 216; continue _fun00005 }
 152:
                zuuluu = global;
                oscard = zuuluu.Date;
                verify = tangon.invitesDisabledUntil;
                report = oscard.prototype;
                report = Object.create(report, {constructor: {value: oscard}});
                offset = report;
                tangon = new offset[oscard](verify, option);
                tangon = tangon instanceof Object ? tangon : report;
                zuuluu = zuuluu.Date;
                report = zuuluu.prototype;
                report = Object.create(report, {constructor: {value: zuuluu}});
                offset = report;
                zuuluu = new offset[zuuluu](verify);
                zuuluu = zuuluu instanceof Object ? zuuluu : report;
                michal = tangon > zuuluu;
 216:
                entity = michal;
 219:
                return entity;
            }
        };
        option = option.bind(yankee)(golfie, entity, zuuluu);
        zuuluu = _closure1_slot1;
        entity = 13;
        entity = offset[entity];
        entity = zuuluu.bind(oscard)(entity);
        entity = entity.bind(oscard)(report);
        var _closure2_slot2 = entity;
        report = _closure1_slot5;
        golfie = report.useMemo;
        tangon = new Array(1);
        tangon[0] = entity;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = _closure1_slot0;
                entity = _closure1_slot2;
                yankee = 14;
                entity = entity[yankee];
                report = undefined;
                oscard = michal.bind(report)(entity);
                tangon = oscard.getMediaIcon;
                michal = _closure2_slot2;
                oscard = tangon.bind(oscard)(michal);
                golfie = {};
                tangon = null;
                michal = tangon == oscard;
                option = undefined;
                if(michal) { _fun00008_ip = 61; continue _fun00007 }
 56:
                option = oscard.source;
 61:
                verify = tangon != option;
                michal = null;
                if(!verify) { _fun00008_ip = 73; continue _fun00007 }
 70:
                michal = option;
 73:
                golfie['guildActivityIndicatorSource'] = michal;
                option = tangon == oscard;
                michal = undefined;
                if(option) { _fun00008_ip = 92; continue _fun00007 }
 87:
                michal = oscard.icon;
 92:
                golfie['IconComponent'] = michal;
                entity = _closure2_slot2;
                entity = entity.isCurrentUserConnected;
                golfie['isCurrentUserConnected'] = entity;
                michal = golfie.guildActivityIndicatorSource;
                oscard = _closure1_slot4;
                entity = _closure1_slot3;
                offset = oscard.bind(report)(golfie, entity);
                entity = {};
                golfie = tangon != michal;
                oscard = null;
                if(!golfie) { _fun00008_ip = 206; continue _fun00007 }
 143:
                verify = _closure1_slot14;
                option = _closure1_slot0;
                golfie = _closure1_slot2;
                golfie = golfie[yankee];
                golfie = option.bind(report)(golfie);
                option = golfie.GuildsBarActivityIndicatorBase;
                golfie = {};
                yankee = _closure1_slot15;
                yankee = yankee.topRightBadge;
                golfie['style'] = yankee;
                golfie['source'] = michal;
                foxtra = golfie;
                romeon = offset;
                offset = copyDataProperties(foxtra, romeon);
                oscard = verify.bind(report)(option, golfie);
 206:
                entity['badgeTopRight'] = oscard;
                tangon = tangon != michal;
                michal = undefined;
                if(!tangon) { _fun00008_ip = 257; continue _fun00007 }
 220:
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                zuuluu = 15;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(report)(zuuluu);
                zuuluu = {};
                oscard = 'top-right';
                zuuluu['position'] = oscard;
                michal = tangon.bind(report)(zuuluu);
 257:
                entity['cutoutTopRight'] = michal;
                return entity;
            }
        };
        entity = golfie.bind(report)(entity, tangon);
        tangon = entity.badgeTopRight;
        golfie = entity.cutoutTopRight;
        var _closure2_slot3 = golfie;
        entity = 16;
        entity = offset[entity];
        zuuluu = zuuluu.bind(oscard)(entity);
        entity = {};
        offset = argBar;
        entity['mentionCount'] = offset;
        offset = argBaz;
        entity['isMentionLowImportance'] = offset;
        entity['joinRequestState'] = verify;
        entity['shouldShowInvitesDisabled'] = option;
        entity = zuuluu.bind(oscard)(entity);
        zuuluu = entity.badge;
        oscard = entity.cutout;
        var _closure2_slot4 = oscard;
        entity = {};
        entity['badgeTopRight'] = tangon;
        entity['badgeBottomRight'] = zuuluu;
        tangon = report.useMemo;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        michal = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = new Array(0);
                zuuluu = _closure2_slot3;
                tangon = null;
                if(!(tangon != zuuluu)) { _fun00010_ip = 31; continue _fun00009 }
 17:
                report = entity.push;
                zuuluu = _closure2_slot3;
                zuuluu = report.bind(entity)(zuuluu);
 31:
                zuuluu = _closure2_slot4;
                if(!(tangon != zuuluu)) { _fun00010_ip = 53; continue _fun00009 }
 39:
                zuuluu = entity.push;
                michal = _closure2_slot4;
                michal = zuuluu.bind(entity)(michal);
 53:
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        entity['cutouts'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();
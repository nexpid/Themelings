// app/modules/guild_member_verification/native/components/MemberVerificationScreen.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
    entity = function(argFoo) { // Original name: MemberVerificationRouteView
        tango = _closure1_slot11;
        mike = _closure1_slot1;
        zulu = _closure1_slot3;
        entity = 9;
        entity = zulu[entity];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = {};
        oscar = argFoo;
        golf = entity;
        report = copyDataProperties(golf, oscar);
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: ExistingJoinRequestHandler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            yankee = entity.guildId;
            var _closure2_slot0 = yankee;
            offset = entity.onClose;
            var _closure2_slot1 = offset;
            oscar = entity.children;
            report = _closure1_slot0;
            options = _closure1_slot3;
            mike = 10;
            golf = options[mike];
            tango = undefined;
            foxtrot = report.bind(tango)(golf);
            romeo = foxtrot.useStateFromStores;
            golf = _closure1_slot8;
            verify = new Array(1);
            verify[0] = golf;
            golf = function() {
                zulu = _closure1_slot8;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            romeo = romeo.bind(foxtrot)(verify, golf);
            var _closure2_slot2 = romeo;
            golf = options[mike];
            kilo = report.bind(tango)(golf);
            backup = kilo.useStateFromStores;
            golf = _closure1_slot7;
            foxtrot = new Array(1);
            foxtrot[0] = golf;
            verify = new Array(1);
            verify[0] = romeo;
            golf = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot2;
                    mike = null;
                    tango = mike != entity;
                    entity = null;
                    if(!tango) { _fun00004_ip = 62; continue _fun00003 }
 18:
                    report = _closure1_slot7;
                    tango = report.getDefaultChannel;
                    zulu = _closure2_slot2;
                    zulu = zulu.id;
                    zulu = tango.bind(report)(zulu);
                    tango = mike == zulu;
                    mike = undefined;
                    if(tango) { _fun00004_ip = 59; continue _fun00003 }
 54:
                    mike = zulu.id;
 59:
                    entity = mike;
 62:
                    return entity;
                }
            };
            verify = backup.bind(kilo)(foxtrot, golf, verify);
            var _closure2_slot3 = verify;
            mike = options[mike];
            foxtrot = report.bind(tango)(mike);
            golf = foxtrot.useStateFromStores;
            mike = _closure1_slot9;
            report = new Array(1);
            report[0] = mike;
            mike = function() {
                zulu = _closure1_slot9;
                mike = zulu.getRequest;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            report = golf.bind(foxtrot)(report, mike);
            golf = _closure1_slot1;
            mike = 11;
            mike = options[mike];
            mike = golf.bind(tango)(mike);
            mike = mike.bind(tango)(report);
            var _closure2_slot4 = mike;
            foxtrot = _closure1_slot4;
            options = foxtrot.useEffect;
            golf = new Array(3);
            golf[0] = yankee;
            golf[1] = mike;
            golf[2] = offset;
            report = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure2_slot4;
                    entity = null;
                    zulu = entity == zulu;
                    entity = undefined;
                    report = undefined;
                    if(zulu) { _fun00006_ip = 30; continue _fun00005 }
 20:
                    zulu = _closure2_slot4;
                    report = zulu.applicationStatus;
 30:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot3;
                    golf = 12;
                    tango = tango[golf];
                    tango = oscar.bind(entity)(tango);
                    tango = tango.GuildJoinRequestApplicationStatuses;
                    tango = tango.SUBMITTED;
                    if(!(tango !== report)) { _fun00006_ip = 160; continue _fun00005 }
 69:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot3;
                    tango = tango[golf];
                    tango = oscar.bind(entity)(tango);
                    tango = tango.GuildJoinRequestApplicationStatuses;
                    tango = tango.REJECTED;
                    if(!(tango === report)) { _fun00006_ip = 203; continue _fun00005 }
 102:
                    tango = _closure2_slot1;
                    tango = tango.bind(entity)();
                    report = _closure1_slot0;
                    oscar = _closure1_slot3;
                    tango = 13;
                    tango = oscar[tango];
                    oscar = report.bind(entity)(tango);
                    report = oscar.openMemberVerificationRejectedAlert;
                    tango = {};
                    golf = _closure2_slot0;
                    tango['guildId'] = golf;
                    golf = true;
                    tango['canWithdraw'] = golf;
                    tango = report.bind(oscar)(tango);
                    _fun00006_ip = 203; continue _fun00005;
 160:
                    tango = _closure2_slot1;
                    tango = tango.bind(entity)();
                    tango = _closure1_slot0;
                    report = _closure1_slot3;
                    zulu = 13;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.openMemberVerificationPendingAlert;
                    mike = _closure2_slot0;
                    mike = zulu.bind(tango)(mike);
 203:
                    return entity;
                }
            };
            report = options.bind(foxtrot)(report, golf);
            options = _closure1_slot4;
            golf = options.useEffect;
            report = new Array(4);
            report[0] = romeo;
            report[1] = yankee;
            report[2] = offset;
            report[3] = verify;
            zulu = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot2;
                    zulu = null;
                    if(!(zulu != mike)) { _fun00008_ip = 29; continue _fun00007 }
 13:
                    mike = _closure2_slot0;
                    if(!(zulu != mike)) { _fun00008_ip = 29; continue _fun00007 }
 21:
                    mike = _closure2_slot3;
                    if(!(zulu == mike)) { _fun00008_ip = 49; continue _fun00007 }
 29:
                    mike = _closure2_slot0;
                    if(!(zulu == mike)) { _fun00008_ip = 109; continue _fun00007 }
 37:
                    zulu = _closure2_slot1;
                    mike = undefined;
                    mike = zulu.bind(mike)();
                    _fun00008_ip = 109; continue _fun00007;
 49:
                    report = _closure1_slot2;
                    zulu = _closure1_slot3;
                    mike = 14;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = report.bind(mike)(zulu);
                    mike = zulu.transitionTo;
                    oscar = _closure1_slot10;
                    report = oscar.CHANNEL;
                    tango = _closure2_slot0;
                    entity = _closure2_slot3;
                    entity = report.bind(oscar)(tango, entity);
                    entity = mike.bind(zulu)(entity);
 109:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = golf.bind(options)(zulu, report);
            zulu = null;
            report = zulu == mike;
            zulu = undefined;
            if(report) { _fun00002_ip = 301; continue _fun00001 }
 295:
            zulu = mike.applicationStatus;
 301:
            report = _closure1_slot0;
            mike = _closure1_slot3;
            golf = 12;
            mike = mike[golf];
            mike = report.bind(tango)(mike);
            mike = mike.GuildJoinRequestApplicationStatuses;
            mike = mike.SUBMITTED;
            if(!(mike !== zulu)) { _fun00002_ip = 425; continue _fun00001 }
 337:
            report = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[golf];
            mike = report.bind(tango)(mike);
            mike = mike.GuildJoinRequestApplicationStatuses;
            mike = mike.APPROVED;
            if(!(mike !== zulu)) { _fun00002_ip = 425; continue _fun00001 }
 370:
            report = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[golf];
            mike = report.bind(tango)(mike);
            mike = mike.GuildJoinRequestApplicationStatuses;
            mike = mike.REJECTED;
            if(!(mike !== zulu)) { _fun00002_ip = 425; continue _fun00001 }
 403:
            report = _closure1_slot11;
            zulu = _closure1_slot12;
            mike = {};
            mike['children'] = oscar;
            mike = report.bind(tango)(zulu, mike);
            return mike;
 425:
            zulu = _closure1_slot11;
            mike = _closure1_slot14;
            entity = {};
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    romeo = 1;
    tango = oscar[romeo];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot5 = golf;
    tango = tango.ActivityIndicator;
    var _closure1_slot6 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Routes;
    var _closure1_slot10 = tango;
    tango = 6;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot11 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot12 = tango;
    tango = 7;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['flex'] = romeo;
    tango['flex'] = verify;
    verify = {'flex': 1, 'alignItems': 'center', 'justifyContent': 'center'};
    offset = 8;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = foxtrot;
    tango['flexLoading'] = verify;
    verify = {};
    verify['flex'] = romeo;
    foxtrot = oscar[offset];
    foxtrot = yankee.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = foxtrot;
    tango['container'] = verify;
    verify = {};
    verify['flex'] = romeo;
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_PRIMARY;
    verify['backgroundColor'] = offset;
    tango['scrollContainer'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot13 = tango;
    tango = function() { // Original name: Loading
        entity = _closure1_slot13;
        tango = undefined;
        report = entity.bind(tango)();
        zulu = _closure1_slot11;
        mike = _closure1_slot5;
        entity = {};
        report = report.flexLoading;
        entity['style'] = report;
        golf = _closure1_slot11;
        oscar = _closure1_slot6;
        report = {'animating': true, 'color': null, 'size': 'large'};
        verify = _closure1_slot1;
        offset = _closure1_slot3;
        options = 8;
        options = offset[options];
        options = verify.bind(tango)(options);
        options = options.unsafe_rawColors;
        options = options.BRAND_500;
        report['color'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot14 = tango;
    tango = 17;
    tango = oscar[tango];
    golf = report.bind(entity)(tango);
    tango = golf.makeAuthenticated;
    mike = function(argFoo) { // Original name: MemberVerificationRouteContainer
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = argFoo;
            golf = mike.navigation;
            var _closure2_slot0 = golf;
            mike = mike.route;
            mike = mike.params;
            foxtrot = mike.guildId;
            zulu = _closure1_slot13;
            report = undefined;
            verify = zulu.bind(report)();
            oscar = _closure1_slot4;
            tango = oscar.useCallback;
            zulu = new Array(1);
            zulu[0] = golf;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = zulu.getState;
                    mike = mike.bind(zulu)();
                    verify = mike.routes;
                    report = mike.index;
                    zulu = verify.length;
                    mike = 1;
                    if(!(!(zulu > mike))) { _fun00012_ip = 92; continue _fun00011 }
 40:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot3;
                    zulu = 15;
                    tango = tango[zulu];
                    zulu = undefined;
                    oscar = oscar.bind(zulu)(tango);
                    tango = oscar.navigateToRootTab;
                    zulu = {};
                    golf = 'messages';
                    zulu['screen'] = golf;
                    zulu = tango.bind(oscar)(zulu);
                    _fun00012_ip = 220; continue _fun00011;
 92:
                    mike = report - mike;
                    zulu = verify[mike];
                    options = null;
                    tango = options == zulu;
                    oscar = undefined;
                    mike = undefined;
                    if(tango) { _fun00012_ip = 118; continue _fun00011 }
 113:
                    mike = zulu.name;
 118:
                    golf = 'member-verification';
                    if(!(golf === mike)) { _fun00012_ip = 206; continue _fun00011 }
 128:
                    tango = 0;
                    zulu = report;
                    if(!(zulu >= tango)) { _fun00012_ip = 220; continue _fun00011 }
 137:
                    offset = verify[zulu];
                    mike = zulu;
                    if(!(options != offset)) { _fun00012_ip = 220; continue _fun00011 }
 148:
                    offset = offset.name;
                    if(!(golf === offset)) { _fun00012_ip = 166; continue _fun00011 }
 157:
                    zulu = mike - 1;
                    if(zulu >= tango) { _fun00012_ip = 137; continue _fun00011 }
 164:
                    _fun00012_ip = 220; continue _fun00011;
 166:
                    tango = _closure1_slot0;
                    golf = _closure1_slot3;
                    zulu = 15;
                    zulu = golf[zulu];
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.popScreens;
                    mike = report - mike;
                    mike = zulu.bind(tango)(mike);
                    _fun00012_ip = 220; continue _fun00011;
 206:
                    mike = _closure2_slot0;
                    entity = mike.goBack;
                    entity = entity.bind(mike)();
 220:
                    entity = undefined;
                    return entity;
                }
            };
            romeo = tango.bind(oscar)(entity, zulu);
            entity = null;
            if(!(entity != foxtrot)) { _fun00010_ip = 182; continue _fun00009 }
 81:
            tango = _closure1_slot11;
            zulu = _closure1_slot16;
            entity = {};
            entity['guildId'] = foxtrot;
            entity['onClose'] = romeo;
            options = _closure1_slot11;
            golf = _closure1_slot1;
            offset = _closure1_slot3;
            oscar = 16;
            oscar = offset[oscar];
            golf = golf.bind(report)(oscar);
            oscar = {};
            verify = verify.flex;
            oscar['style'] = verify;
            yankee = _closure1_slot11;
            offset = _closure1_slot15;
            verify = {};
            verify['guildId'] = foxtrot;
            verify['onClose'] = romeo;
            verify = yankee.bind(report)(offset, verify);
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            entity['children'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            _fun00010_ip = 198; continue _fun00009;
 182:
            tango = _closure1_slot11;
            zulu = _closure1_slot14;
            mike = {};
            entity = tango.bind(report)(zulu, mike);
 198:
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_member_verification/native/components/MemberVerificationScreen.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
// app/modules/guild_settings/roles/native/GuildSettingsRoles.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
    entity = function(argFoo) { // Original name: hasSearchQuery
        michal = argFoo;
        entity = michal.trim;
        michal = entity.bind(michal)();
        entity = '';
        entity = entity !== michal;
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function(argFoo, argBar) { // Original name: useSearchQueryStateWithAnalytics
        offset = argFoo;
        yankee = argBar;
        var _closure2_slot0 = offset;
        var _closure2_slot1 = yankee;
        report = _closure1_slot5;
        zuuluu = report.useState;
        michal = '';
        zuuluu = zuuluu.bind(report)(michal);
        michal = _closure1_slot4;
        oscard = undefined;
        verify = 2;
        michal = michal.bind(oscard)(zuuluu, verify);
        zuuluu = 0;
        report = michal[zuuluu];
        var _closure2_slot2 = report;
        golfie = 1;
        michal = michal[golfie];
        var _closure2_slot3 = michal;
        romeon = _closure1_slot5;
        option = romeon.useState;
        michal = function() {
            zuuluu = _closure1_slot16;
            michal = _closure2_slot0;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        option = option.bind(romeon)(michal);
        michal = _closure1_slot4;
        michal = michal.bind(oscard)(option, verify);
        zuuluu = michal[zuuluu];
        michal = michal[golfie];
        var _closure2_slot4 = michal;
        option = _closure1_slot5;
        golfie = option.useRef;
        michal = false;
        michal = golfie.bind(option)(michal);
        var _closure2_slot5 = michal;
        verify = _closure1_slot5;
        option = verify.useCallback;
        golfie = new Array(1);
        golfie[0] = offset;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                oscard = argFoo;
                var _closure3_slot0 = oscard;
                zuuluu = _closure1_slot26;
                entity = undefined;
                golfie = zuuluu.bind(entity)(oscard);
                var _closure3_slot1 = golfie;
                zuuluu = _closure2_slot5;
                zuuluu = zuuluu.current;
                zuuluu = !zuuluu;
                if(!zuuluu) { _fun00002_ip = 48; continue _fun00001 }
 45:
                zuuluu = golfie;
 48:
                if(!zuuluu) { _fun00002_ip = 117; continue _fun00001 }
 51:
                golfie = _closure2_slot5;
                zuuluu = true;
                golfie['current'] = zuuluu;
                golfie = _closure1_slot1;
                option = _closure1_slot3;
                zuuluu = 18;
                zuuluu = option[zuuluu];
                verify = golfie.bind(entity)(zuuluu);
                option = verify.track;
                zuuluu = _closure1_slot19;
                golfie = zuuluu.SEARCH_STARTED;
                zuuluu = {};
                offset = 'Roles';
                zuuluu['search_type'] = offset;
                zuuluu = option.bind(verify)(golfie, zuuluu);
 117:
                zuuluu = _closure2_slot3;
                zuuluu = zuuluu.bind(entity)(oscard);
                zuuluu = _closure2_slot4;
                report = _closure1_slot16;
                tangon = _closure2_slot0;
                report = report.bind(entity)(tangon);
                tangon = report.filter;
                michal = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = _closure3_slot1;
                        entity = !zuuluu;
                        if(!zuuluu) { _fun00004_ip = 73; continue _fun00003 }
 13:
                        tangon = _closure2_slot0;
                        zuuluu = argFoo;
                        zuuluu = tangon[zuuluu];
                        tangon = zuuluu.name;
                        zuuluu = tangon.toLowerCase;
                        tangon = zuuluu.bind(tangon)();
                        zuuluu = tangon.indexOf;
                        report = _closure3_slot0;
                        michal = report.trim;
                        michal = michal.bind(report)();
                        zuuluu = zuuluu.bind(tangon)(michal);
                        michal = 0;
                        entity = zuuluu >= michal;
 73:
                        return entity;
                    }
                };
                michal = tangon.bind(report)(michal);
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        michal = option.bind(verify)(michal, golfie);
        var _closure2_slot6 = michal;
        verify = _closure1_slot5;
        option = verify.useEffect;
        golfie = new Array(4);
        golfie[0] = yankee;
        golfie[1] = report;
        golfie[2] = offset;
        golfie[3] = michal;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure2_slot1;
                if(michal) { _fun00006_ip = 68; continue _fun00005 }
 10:
                report = _closure1_slot26;
                tangon = _closure2_slot2;
                zuuluu = undefined;
                tangon = report.bind(zuuluu)(tangon);
                if(tangon) { _fun00006_ip = 55; continue _fun00005 }
 31:
                tangon = _closure2_slot4;
                report = _closure1_slot16;
                michal = _closure2_slot0;
                michal = report.bind(zuuluu)(michal);
                michal = tangon.bind(zuuluu)(michal);
                _fun00006_ip = 68; continue _fun00005;
 55:
                michal = _closure2_slot6;
                entity = _closure2_slot2;
                entity = michal.bind(zuuluu)(entity);
 68:
                entity = undefined;
                return entity;
            }
        };
        entity = option.bind(verify)(entity, golfie);
        entity = {};
        tangon = _closure1_slot26;
        tangon = tangon.bind(oscard)(report);
        entity['hasSearchQuery'] = tangon;
        entity['filteredRoles'] = zuuluu;
        entity['setSearchQuery'] = michal;
        return entity;
    };
    var _closure1_slot27 = entity;
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
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    foxtra = 1;
    tangon = oscard[foxtra];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot6 = golfie;
    backup = tangon.StyleSheet;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.getGuildEveryoneRoleId;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    offset = 8;
    tangon = oscard[offset];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 11;
    golfie = oscard[tangon];
    golfie = romeon.bind(entity)(golfie);
    var _closure1_slot15 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.getRolesOrder;
    var _closure1_slot16 = tangon;
    yankee = 12;
    tangon = oscard[yankee];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildSettingsRoleEditSections;
    var _closure1_slot17 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.GuildSettingsSections;
    var _closure1_slot18 = golfie;
    golfie = tangon.AnalyticEvents;
    var _closure1_slot19 = golfie;
    golfie = tangon.AnalyticsSections;
    var _closure1_slot20 = golfie;
    kiloes = tangon.Fonts;
    tangon = tangon.Permissions;
    var _closure1_slot21 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot22 = golfie;
    golfie = tangon.jsxs;
    var _closure1_slot23 = golfie;
    tangon = tangon.Fragment;
    var _closure1_slot24 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    verify['flex'] = foxtra;
    tangon['container'] = verify;
    verify = {};
    verify['paddingHorizontal'] = yankee;
    tangon['scrollContainer'] = verify;
    verify = {};
    yankee = 16;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    verify['paddingTop'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_12;
    verify['paddingHorizontal'] = foxtra;
    tangon['searchWrapper'] = verify;
    verify = {};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    verify['padding'] = foxtra;
    tangon['subheaderContainer'] = verify;
    verify = {'paddingBottom': 16, 'alignItems': 'center'};
    tangon['emptySubheaderContainer'] = verify;
    verify = {'backgroundColor': null, 'width': '100%', 'flex': 1, 'alignItems': 'center'};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_MOBILE_SECONDARY;
    verify['backgroundColor'] = foxtra;
    foxtra = '100%';
    tangon['emptyIlloContainer'] = verify;
    verify = {'marginTop': 28, 'width': '100%'};
    tangon['emptyIllo'] = verify;
    verify = {'marginTop': 0, 'aspectRatio': 2.75, 'width': '100%', 'height': 'auto'};
    tangon['emptyIlloLarge'] = verify;
    result = 24;
    verify = {'paddingHorizontal': 16, 'paddingTop': 8, 'paddingBottom': 24, 'alignItems': 'center'};
    tangon['emptySubheaderBody'] = verify;
    verify = {};
    sizing = 17;
    sizing = oscard[sizing];
    output = romeon.bind(entity)(sizing);
    sizing = kiloes.DISPLAY_EXTRABOLD;
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.HEADER_PRIMARY;
    update = output.bind(entity)(sizing, kiloes, result);
    source = verify;
    kiloes = copyDataProperties(source, update);
    kiloes = 'marginTop';
    verify[kiloes] = yankee;
    tangon['subheader'] = verify;
    verify = {'marginTop': 8, 'textAlign': 'center'};
    tangon['subheaderBody'] = verify;
    verify = {'flexGrow': 0, 'marginTop': 16};
    tangon['subheaderButton'] = verify;
    verify = {'lineHeight': 18, 'textAlign': 'center'};
    tangon['subheaderDescription'] = verify;
    verify = {};
    backup = backup.hairlineWidth;
    verify['height'] = backup;
    verify['width'] = foxtra;
    tangon['divider'] = verify;
    verify = {'marginTop': 2, 'marginBottom': 24};
    tangon['everyoneWrapper'] = verify;
    verify = {};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    verify['marginTop'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    verify['marginLeft'] = foxtra;
    tangon['edittingRolesHeader'] = verify;
    verify = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    tangon['rolesHeader'] = verify;
    verify = {'marginBottom': 8, 'flexDirection': 'row', 'alignItems': 'center'};
    tangon['reorderButton'] = verify;
    verify = {};
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.TEXT_LINK;
    verify['tintColor'] = yankee;
    tangon['reorderIcon'] = verify;
    verify = {};
    verify['marginLeft'] = offset;
    tangon['reorderButtonText'] = verify;
    verify = {'padding': 16, 'paddingTop': 8, 'lineHeight': 18};
    tangon['rolesBody'] = verify;
    verify = {};
    offset = 0.4;
    verify['opacity'] = offset;
    tangon['emptyRolesIcon'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot25 = tangon;
    tangon = 56;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings/roles/native/GuildSettingsRoles.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ConnectedGuildSettingsModalRoles
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            golfie = michal.guildId;
            var _closure2_slot0 = golfie;
            result = michal.contentContainerStyle;
            michal = _closure1_slot25;
            tangon = undefined;
            output = michal.bind(tangon)();
            var _closure2_slot1 = output;
            zuuluu = _closure1_slot5;
            michal = zuuluu.useRef;
            sequen = null;
            echoed = michal.bind(zuuluu)(sequen);
            report = _closure1_slot0;
            option = _closure1_slot3;
            michal = 23;
            michal = option[michal];
            zuuluu = report.bind(tangon)(michal);
            michal = zuuluu.useNavigation;
            zuuluu = michal.bind(zuuluu)();
            var _closure2_slot2 = zuuluu;
            verify = _closure1_slot1;
            michal = 24;
            michal = option[michal];
            michal = verify.bind(tangon)(michal);
            yankee = michal.bind(tangon)();
            var _closure2_slot3 = yankee;
            michal = 20;
            verify = option[michal];
            foxtra = report.bind(tangon)(verify);
            romeon = foxtra.useStateFromStores;
            verify = _closure1_slot7;
            offset = new Array(1);
            offset[0] = verify;
            verify = function() {
                entity = _closure1_slot7;
                entity = entity.theme;
                return entity;
            };
            whisks = romeon.bind(foxtra)(offset, verify);
            var _closure2_slot4 = whisks;
            michal = option[michal];
            verify = report.bind(tangon)(michal);
            option = verify.useStateFromStoresObject;
            michal = _closure1_slot12;
            report = new Array(6);
            report[0] = michal;
            michal = _closure1_slot11;
            report[1] = michal;
            michal = _closure1_slot9;
            report[2] = michal;
            michal = _closure1_slot15;
            report[3] = michal;
            michal = _closure1_slot14;
            report[4] = michal;
            michal = _closure1_slot10;
            report[5] = michal;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    report = _closure1_slot12;
                    michal = report.getGuild;
                    entity = _closure2_slot0;
                    oscard = michal.bind(report)(entity);
                    michal = _closure1_slot9;
                    entity = michal.getId;
                    report = entity.bind(michal)();
                    entity = {};
                    entity['guild'] = oscard;
                    offset = _closure1_slot10;
                    verify = offset.getMemberCount;
                    michal = null;
                    yankee = michal == oscard;
                    golfie = undefined;
                    option = undefined;
                    if(yankee) { _fun00010_ip = 72; continue _fun00009 }
 67:
                    option = oscard.id;
 72:
                    verify = verify.bind(offset)(option);
                    offset = michal != verify;
                    option = 0;
                    if(!offset) { _fun00010_ip = 89; continue _fun00009 }
 86:
                    option = verify;
 89:
                    entity['memberCount'] = option;
                    offset = _closure1_slot14;
                    verify = offset.getRoleMemberCount;
                    yankee = michal == oscard;
                    option = undefined;
                    if(yankee) { _fun00010_ip = 118; continue _fun00009 }
 113:
                    option = oscard.id;
 118:
                    option = verify.bind(offset)(option);
                    entity['roleMemberCount'] = option;
                    verify = _closure1_slot11;
                    option = verify.getRoles;
                    tangon = _closure2_slot0;
                    tangon = option.bind(verify)(tangon);
                    entity['roles'] = tangon;
                    tangon = _closure1_slot15;
                    tangon = tangon.order;
                    entity['rolesOrder'] = tangon;
                    entity['currentUserId'] = report;
                    tangon = michal != oscard;
                    michal = undefined;
                    if(!tangon) { _fun00010_ip = 213; continue _fun00009 }
 181:
                    tangon = _closure1_slot2;
                    option = _closure1_slot3;
                    zuuluu = 25;
                    zuuluu = option[zuuluu];
                    tangon = tangon.bind(golfie)(zuuluu);
                    zuuluu = tangon.getHighestRole;
                    michal = zuuluu.bind(tangon)(oscard, report);
 213:
                    entity['highestRole'] = michal;
                    return entity;
                }
            };
            report = option.bind(verify)(report, michal);
            verify = report.guild;
            var _closure2_slot5 = verify;
            michal = report.memberCount;
            var _closure2_slot6 = michal;
            kiloes = report.roleMemberCount;
            var _closure2_slot7 = kiloes;
            offset = report.roles;
            var _closure2_slot8 = offset;
            sizing = report.rolesOrder;
            var _closure2_slot9 = sizing;
            limora = report.currentUserId;
            var _closure2_slot10 = limora;
            sierra = report.highestRole;
            var _closure2_slot11 = sierra;
            report = function(argFoo) { // Original name: useRoleJustCreatedHelper
                golfie = argFoo;
                var _closure3_slot0 = golfie;
                report = _closure1_slot0;
                tangon = _closure1_slot3;
                entity = 19;
                tangon = tangon[entity];
                entity = undefined;
                oscard = report.bind(entity)(tangon);
                report = oscard.useGuildSettingsRolesManagerState;
                tangon = function(argFoo) {
                    entity = argFoo;
                    entity = entity.roleJustCreated;
                    return entity;
                };
                oscard = report.bind(oscard)(tangon);
                var _closure3_slot1 = oscard;
                report = _closure1_slot5;
                tangon = report.useLayoutEffect;
                zuuluu = new Array(2);
                zuuluu[0] = golfie;
                zuuluu[1] = oscard;
                michal = function() {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        michal = _closure3_slot1;
                        report = undefined;
                        if(michal) { _fun00012_ip = 16; continue _fun00011 }
 14:
                        return report;
 16:
                        michal = global;
                        tangon = michal.setTimeout;
                        zuuluu = function() {
                            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                entity = _closure3_slot0;
                                michal = entity.current;
                                tangon = null;
                                entity = tangon == michal;
                                zuuluu = michal;
                                if(entity) { _fun00014_ip = 37; continue _fun00013 }
 24:
                                michal = michal._listRef;
                                entity = tangon == michal;
                                zuuluu = michal;
 37:
                                michal = zuuluu;
                                if(entity) { _fun00014_ip = 55; continue _fun00013 }
 43:
                                zuuluu = zuuluu.current;
                                entity = tangon == zuuluu;
                                michal = zuuluu;
 55:
                                if(entity) { _fun00014_ip = 68; continue _fun00013 }
 58:
                                entity = michal.scrollToEnd;
                                entity = entity.bind(michal)();
 68:
                                zuuluu = _closure1_slot0;
                                michal = _closure1_slot3;
                                entity = 19;
                                michal = michal[entity];
                                entity = undefined;
                                tangon = zuuluu.bind(entity)(michal);
                                zuuluu = tangon.setRoleJustCreated;
                                michal = false;
                                michal = zuuluu.bind(tangon)(michal);
                                return entity;
                            }
                        };
                        michal = 1000;
                        michal = tangon.bind(report)(zuuluu, michal);
                        var _closure4_slot0 = michal;
                        entity = function() {
                            entity = global;
                            zuuluu = entity.clearTimeout;
                            michal = _closure4_slot0;
                            entity = undefined;
                            michal = zuuluu.bind(entity)(michal);
                            zuuluu = _closure1_slot0;
                            tangon = _closure1_slot3;
                            michal = 19;
                            michal = tangon[michal];
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.setRoleJustCreated;
                            michal = false;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        };
                        return entity;
                    }
                };
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            report = report.bind(tangon)(echoed);
            report = function(argFoo) { // Original name: useGuildRoleAccessGuard
                entity = argFoo;
                var _closure3_slot0 = entity;
                report = _closure1_slot0;
                tangon = _closure1_slot3;
                entity = 20;
                tangon = tangon[entity];
                entity = undefined;
                golfie = report.bind(entity)(tangon);
                oscard = golfie.useStateFromStoresObject;
                tangon = _closure1_slot12;
                report = new Array(2);
                report[0] = tangon;
                tangon = _closure1_slot13;
                report[1] = tangon;
                tangon = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        tangon = _closure1_slot12;
                        zuuluu = tangon.getGuild;
                        entity = _closure3_slot0;
                        report = zuuluu.bind(tangon)(entity);
                        entity = {};
                        zuuluu = null;
                        zuuluu = zuuluu != report;
                        if(!zuuluu) { _fun00016_ip = 50; continue _fun00015 }
 35:
                        oscard = _closure1_slot13;
                        tangon = oscard.canAccessGuildSettings;
                        zuuluu = tangon.bind(oscard)(report);
 50:
                        entity['canAccessSettings'] = zuuluu;
                        tangon = _closure1_slot13;
                        zuuluu = tangon.can;
                        michal = _closure1_slot21;
                        michal = michal.MANAGE_ROLES;
                        michal = zuuluu.bind(tangon)(michal, report);
                        entity['canManageRoles'] = michal;
                        return entity;
                    }
                };
                tangon = oscard.bind(golfie)(report, tangon);
                oscard = tangon.canAccessSettings;
                var _closure3_slot1 = oscard;
                golfie = tangon.canManageRoles;
                var _closure3_slot2 = golfie;
                report = _closure1_slot5;
                tangon = report.useEffect;
                zuuluu = new Array(2);
                zuuluu[0] = golfie;
                zuuluu[1] = oscard;
                michal = function() {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        entity = _closure3_slot2;
                        if(!entity) { _fun00018_ip = 14; continue _fun00017 }
 10:
                        entity = _closure3_slot1;
 14:
                        if(entity) { _fun00018_ip = 74; continue _fun00017 }
 17:
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot3;
                        entity = 21;
                        entity = tangon[entity];
                        michal = undefined;
                        report = zuuluu.bind(michal)(entity);
                        entity = report.terminate;
                        entity = entity.bind(report)();
                        entity = 22;
                        entity = tangon[entity];
                        michal = zuuluu.bind(michal)(entity);
                        entity = michal.close;
                        entity = entity.bind(michal)();
 74:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            report = report.bind(tangon)(golfie);
            option = _closure1_slot5;
            golfie = option.useState;
            report = false;
            option = golfie.bind(option)(report);
            golfie = _closure1_slot4;
            report = 2;
            golfie = golfie.bind(tangon)(option, report);
            update = 0;
            foxtra = golfie[update];
            var _closure2_slot12 = foxtra;
            report = 1;
            report = golfie[report];
            var _closure2_slot13 = report;
            report = _closure1_slot27;
            report = report.bind(tangon)(offset, foxtra);
            golfie = report.filteredRoles;
            var _closure2_slot14 = golfie;
            target = report.hasSearchQuery;
            var _closure2_slot15 = target;
            report = report.setSearchQuery;
            var _closure2_slot16 = report;
            backup = _closure1_slot5;
            romeon = backup.useMemo;
            option = new Array(7);
            option[0] = verify;
            option[1] = offset;
            option[2] = sizing;
            option[3] = kiloes;
            option[4] = limora;
            option[5] = sierra;
            option[6] = golfie;
            golfie = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = _closure2_slot9;
                    tangon = null;
                    if(!(tangon == zuuluu)) { _fun00020_ip = 21; continue _fun00019 }
 15:
                    oscard = _closure2_slot14;
                    _fun00020_ip = 25; continue _fun00019;
 21:
                    oscard = _closure2_slot9;
 25:
                    report = oscard.filter;
                    zuuluu = function(argFoo) {
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            tangon = argFoo;
                            entity = _closure2_slot5;
                            zuuluu = null;
                            entity = zuuluu != entity;
                            if(!entity) { _fun00022_ip = 68; continue _fun00021 }
 19:
                            golfie = _closure1_slot0;
                            oscard = _closure1_slot3;
                            report = 26;
                            oscard = oscard[report];
                            report = undefined;
                            golfie = golfie.bind(report)(oscard);
                            oscard = golfie.isEveryoneRoleId;
                            report = _closure2_slot5;
                            report = report.id;
                            report = oscard.bind(golfie)(report, tangon);
                            entity = !report;
 68:
                            if(!entity) { _fun00022_ip = 83; continue _fun00021 }
 71:
                            michal = _closure2_slot8;
                            michal = michal[tangon];
                            entity = zuuluu != michal;
 83:
                            return entity;
                        }
                    };
                    oscard = report.bind(oscard)(zuuluu);
                    report = oscard.map;
                    zuuluu = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            michal = _closure2_slot8;
                            entity = argFoo;
                            tangon = michal[entity];
                            entity = {};
                            entity['role'] = tangon;
                            zuuluu = _closure2_slot7;
                            michal = null;
                            oscard = michal == zuuluu;
                            zuuluu = undefined;
                            if(oscard) { _fun00024_ip = 49; continue _fun00023 }
 36:
                            report = _closure2_slot7;
                            tangon = tangon.id;
                            zuuluu = report[tangon];
 49:
                            tangon = michal != zuuluu;
                            michal = 0;
                            if(!tangon) { _fun00024_ip = 61; continue _fun00023 }
 58:
                            michal = zuuluu;
 61:
                            entity['memberCount'] = michal;
                            return entity;
                        }
                    };
                    report = report.bind(oscard)(zuuluu);
                    zuuluu = _closure2_slot5;
                    oscard = tangon != zuuluu;
                    zuuluu = 0;
                    tangon = 0;
                    if(!oscard) { _fun00020_ip = 92; continue _fun00019 }
 74:
                    oscard = report.findIndex;
                    michal = function(argFoo) {
                        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                            michal = argFoo;
                            report = _closure1_slot2;
                            zuuluu = _closure1_slot3;
                            entity = 25;
                            entity = zuuluu[entity];
                            zuuluu = undefined;
                            offset = report.bind(zuuluu)(entity);
                            verify = offset.isRoleHigher;
                            backup = _closure2_slot5;
                            foxtra = _closure2_slot10;
                            romeon = _closure2_slot11;
                            yankee = michal.role;
                            kiloes = offset;
                            entity = kiloes[verify](backup, foxtra, romeon, yankee, offset);
                            report = !entity;
                            entity = !report;
                            if(report) { _fun00026_ip = 141; continue _fun00025 }
 71:
                            report = _closure1_slot0;
                            golfie = _closure1_slot3;
                            tangon = 26;
                            tangon = golfie[tangon];
                            report = report.bind(zuuluu)(tangon);
                            tangon = report.isEveryoneRoleId;
                            option = _closure2_slot5;
                            golfie = null;
                            golfie = golfie == option;
                            zuuluu = undefined;
                            if(golfie) { _fun00026_ip = 121; continue _fun00025 }
 112:
                            oscard = _closure2_slot5;
                            zuuluu = oscard.id;
 121:
                            michal = michal.role;
                            michal = michal.id;
                            michal = tangon.bind(report)(zuuluu, michal);
                            entity = !michal;
 141:
                            return entity;
                        }
                    };
                    tangon = oscard.bind(report)(michal);
 92:
                    michal = global;
                    oscard = michal.Object;
                    michal = oscard.keys;
                    entity = _closure2_slot8;
                    entity = michal.bind(oscard)(entity);
                    michal = entity.length;
                    entity = 1;
                    michal = michal - entity;
                    entity = {};
                    entity['roleData'] = report;
                    entity['firstEditableIndex'] = tangon;
                    entity['numSortableRoles'] = michal;
                    michal = michal > zuuluu;
                    entity['hasRoles'] = michal;
                    return entity;
                }
            };
            golfie = romeon.bind(backup)(golfie, option);
            sizing = golfie.roleData;
            var _closure2_slot17 = sizing;
            status = golfie.firstEditableIndex;
            var _closure2_slot18 = status;
            option = golfie.numSortableRoles;
            record = golfie.hasRoles;
            var _closure2_slot19 = record;
            kiloes = _closure1_slot5;
            backup = kiloes.useCallback;
            romeon = new Array(1);
            romeon[0] = report;
            golfie = function(argFoo) {
                michal = argFoo;
                zuuluu = _closure2_slot16;
                entity = michal.toLowerCase;
                michal = entity.bind(michal)();
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            source = backup.bind(kiloes)(golfie, romeon);
            kiloes = _closure1_slot5;
            backup = kiloes.useCallback;
            romeon = new Array(1);
            romeon[0] = verify;
            golfie = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    tangon = _closure1_slot1;
                    verify = _closure1_slot3;
                    entity = 18;
                    zuuluu = verify[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(zuuluu);
                    report = oscard.track;
                    zuuluu = _closure1_slot19;
                    tangon = zuuluu.OPEN_MODAL;
                    zuuluu = {};
                    golfie = _closure1_slot20;
                    golfie = golfie.GUILD_ROLE_CREATION_MODAL;
                    zuuluu['type'] = golfie;
                    option = _closure1_slot0;
                    golfie = 27;
                    golfie = verify[golfie];
                    verify = option.bind(entity)(golfie);
                    option = verify.collectGuildAnalyticsMetadata;
                    yankee = _closure2_slot5;
                    golfie = null;
                    yankee = golfie == yankee;
                    golfie = undefined;
                    if(yankee) { _fun00028_ip = 105; continue _fun00027 }
 96:
                    offset = _closure2_slot5;
                    golfie = offset.id;
 105:
                    romeon = option.bind(verify)(golfie);
                    foxtra = zuuluu;
                    golfie = copyDataProperties(foxtra, romeon);
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot3;
                    michal = 28;
                    michal = tangon[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.open;
                    michal = michal.bind(zuuluu)();
                    return entity;
                }
            };
            cntext = backup.bind(kiloes)(golfie, romeon);
            var _closure2_slot20 = cntext;
            kiloes = _closure1_slot5;
            backup = kiloes.useCallback;
            romeon = new Array(1);
            romeon[0] = zuuluu;
            golfie = function(argFoo) {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    golfie = arguments[1];
                    entity = undefined;
                    if(!(golfie === entity)) { _fun00030_ip = 11; continue _fun00029 }
 9:
                    golfie = false;
 11:
                    report = _closure2_slot2;
                    tangon = report.push;
                    michal = _closure1_slot18;
                    zuuluu = michal.ROLE_EDIT_REFRESH;
                    michal = {};
                    option = argFoo;
                    michal['role'] = option;
                    michal['newRole'] = golfie;
                    oscard = _closure1_slot17;
                    oscard = oscard.DISPLAY;
                    michal['section'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                }
            };
            kiloes = backup.bind(kiloes)(golfie, romeon);
            var _closure2_slot21 = kiloes;
            ctrled = _closure1_slot5;
            backup = ctrled.useCallback;
            romeon = new Array(1);
            romeon[0] = report;
            golfie = function() {
                tangon = _closure2_slot13;
                entity = undefined;
                zuuluu = true;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = _closure2_slot16;
                michal = '';
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            golfie = backup.bind(ctrled)(golfie, romeon);
            var _closure2_slot22 = golfie;
            ctrled = _closure1_slot5;
            backup = ctrled.useCallback;
            romeon = new Array(1);
            romeon[0] = report;
            report = function() {
                tangon = _closure2_slot16;
                entity = undefined;
                zuuluu = '';
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = _closure2_slot13;
                michal = function(argFoo) {
                    entity = argFoo;
                    entity = !entity;
                    return entity;
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            report = backup.bind(ctrled)(report, romeon);
            var _closure2_slot23 = report;
            vacuum = _closure1_slot5;
            ctrled = vacuum.useCallback;
            backup = new Array(2);
            backup[0] = verify;
            backup[1] = report;
            romeon = function() {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    zuuluu = _closure1_slot15;
                    michal = zuuluu.getUpdates;
                    tangon = michal.bind(zuuluu)();
                    zuuluu = tangon.length;
                    michal = 0;
                    michal = zuuluu > michal;
                    if(!michal) { _fun00032_ip = 46; continue _fun00031 }
 33:
                    report = _closure2_slot5;
                    zuuluu = null;
                    michal = zuuluu != report;
 46:
                    if(!michal) { _fun00032_ip = 95; continue _fun00031 }
 49:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 29;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.batchRoleUpdate;
                    entity = _closure2_slot5;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity, tangon);
 95:
                    michal = _closure2_slot23;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                }
            };
            ctrled = ctrled.bind(vacuum)(romeon, backup);
            var _closure2_slot24 = ctrled;
            config = _closure1_slot5;
            vacuum = config.useCallback;
            backup = function(argFoo) {
                michal = argFoo;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                entity = 30;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.updateRoleOrder;
                zuuluu = michal.from;
                michal = michal.to;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            romeon = new Array(0);
            backup = vacuum.bind(config)(backup, romeon);
            papara = _closure1_slot5;
            config = papara.useCallback;
            vacuum = new Array(5);
            vacuum[0] = output;
            vacuum[1] = sizing;
            vacuum[2] = target;
            vacuum[3] = foxtra;
            vacuum[4] = report;
            romeon = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    tangon = _closure1_slot23;
                    zuuluu = _closure1_slot6;
                    michal = {};
                    report = {};
                    entity = _closure2_slot1;
                    entity = entity.rolesHeader;
                    oscard = new Array(2);
                    oscard[0] = entity;
                    verify = _closure2_slot12;
                    entity = undefined;
                    option = undefined;
                    if(!verify) { _fun00034_ip = 57; continue _fun00033 }
 47:
                    verify = _closure2_slot1;
                    option = verify.edittingRolesHeader;
 57:
                    oscard[1] = option;
                    report['style'] = oscard;
                    verify = _closure1_slot22;
                    romeon = _closure1_slot0;
                    offset = _closure1_slot3;
                    oscard = 31;
                    oscard = offset[oscard];
                    oscard = romeon.bind(entity)(oscard);
                    option = oscard.TableRowGroupTitle;
                    oscard = {};
                    backup = 32;
                    foxtra = offset[backup];
                    foxtra = romeon.bind(entity)(foxtra);
                    kiloes = foxtra.intl;
                    foxtra = kiloes.formatToPlainString;
                    offset = offset[backup];
                    offset = romeon.bind(entity)(offset);
                    offset = offset.t;
                    romeon = offset.38N3V1;
                    offset = {};
                    sizing = _closure2_slot17;
                    result = sizing.length;
                    sizing = global;
                    sizing = sizing.HermesInternal;
                    output = sizing.concat;
                    sizing = '';
                    sizing = output.bind(sizing)(result);
                    offset['numRoles'] = sizing;
                    offset = foxtra.bind(kiloes)(romeon, offset);
                    oscard['title'] = offset;
                    oscard = verify.bind(entity)(option, oscard);
                    option = new Array(2);
                    option[0] = oscard;
                    offset = _closure2_slot12;
                    verify = null;
                    if(offset) { _fun00034_ip = 527; continue _fun00033 }
 217:
                    offset = _closure2_slot15;
                    verify = null;
                    if(offset) { _fun00034_ip = 527; continue _fun00033 }
 229:
                    foxtra = _closure1_slot23;
                    ctrled = _closure1_slot0;
                    echoed = _closure1_slot3;
                    offset = 33;
                    offset = echoed[offset];
                    offset = ctrled.bind(entity)(offset);
                    romeon = offset.PressableOpacity;
                    offset = {};
                    kiloes = 'text';
                    offset['accessibilityRole'] = kiloes;
                    kiloes = echoed[backup];
                    kiloes = ctrled.bind(entity)(kiloes);
                    output = kiloes.intl;
                    sizing = output.string;
                    kiloes = echoed[backup];
                    kiloes = ctrled.bind(entity)(kiloes);
                    kiloes = kiloes.t;
                    kiloes = kiloes.0dOFq6;
                    kiloes = sizing.bind(output)(kiloes);
                    offset['accessibilityLabel'] = kiloes;
                    kiloes = _closure2_slot23;
                    offset['onPress'] = kiloes;
                    update = _closure2_slot1;
                    kiloes = update.reorderButton;
                    offset['style'] = kiloes;
                    result = _closure1_slot22;
                    kiloes = 34;
                    kiloes = echoed[kiloes];
                    kiloes = ctrled.bind(entity)(kiloes);
                    sizing = kiloes.ArrowsUpDownIcon;
                    kiloes = {};
                    source = _closure1_slot1;
                    output = 16;
                    output = echoed[output];
                    output = source.bind(entity)(output);
                    output = output.colors;
                    output = output.TEXT_LINK;
                    kiloes['color'] = output;
                    output = 'sm';
                    kiloes['size'] = output;
                    sizing = result.bind(entity)(sizing, kiloes);
                    kiloes = new Array(2);
                    kiloes[0] = sizing;
                    sizing = 35;
                    sizing = echoed[sizing];
                    sizing = ctrled.bind(entity)(sizing);
                    output = sizing.Text;
                    sizing = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-link'};
                    update = update.reorderButtonText;
                    sizing['style'] = update;
                    update = echoed[backup];
                    update = ctrled.bind(entity)(update);
                    source = update.intl;
                    update = source.string;
                    echoed = echoed[backup];
                    echoed = ctrled.bind(entity)(echoed);
                    echoed = echoed.t;
                    echoed = echoed.0dOFq6;
                    echoed = update.bind(source)(echoed);
                    sizing['children'] = echoed;
                    sizing = result.bind(entity)(output, sizing);
                    kiloes[1] = sizing;
                    offset['children'] = kiloes;
                    verify = foxtra.bind(entity)(romeon, offset);
 527:
                    option[1] = verify;
                    report['children'] = option;
                    option = tangon.bind(entity)(zuuluu, report);
                    report = new Array(2);
                    report[0] = option;
                    option = _closure2_slot12;
                    oscard = null;
                    if(!option) { _fun00034_ip = 673; continue _fun00033 }
 558:
                    verify = _closure1_slot22;
                    foxtra = _closure1_slot0;
                    offset = _closure1_slot3;
                    golfie = 35;
                    golfie = offset[golfie];
                    golfie = foxtra.bind(entity)(golfie);
                    option = golfie.Text;
                    golfie = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-normal'};
                    yankee = _closure2_slot1;
                    yankee = yankee.rolesBody;
                    golfie['style'] = yankee;
                    yankee = offset[backup];
                    yankee = foxtra.bind(entity)(yankee);
                    romeon = yankee.intl;
                    yankee = romeon.string;
                    offset = offset[backup];
                    offset = foxtra.bind(entity)(offset);
                    offset = offset.t;
                    offset = offset.nHcwVl;
                    offset = yankee.bind(romeon)(offset);
                    golfie['children'] = offset;
                    oscard = verify.bind(entity)(option, golfie);
 673:
                    report[1] = oscard;
                    michal['children'] = report;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                }
            };
            config = config.bind(papara)(romeon, vacuum);
            papara = _closure1_slot5;
            vacuum = papara.useCallback;
            romeon = new Array(5);
            romeon[0] = output;
            romeon[1] = cntext;
            romeon[2] = record;
            romeon[3] = whisks;
            romeon[4] = yankee;
            yankee = function() {
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    michal = _closure2_slot3;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    entity = 36;
                    entity = tangon[entity];
                    report = undefined;
                    tangon = zuuluu.bind(report)(entity);
                    zuuluu = tangon.isThemeDark;
                    entity = _closure2_slot4;
                    entity = zuuluu.bind(tangon)(entity);
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot3;
                    if(michal) { _fun00036_ip = 89; continue _fun00035 }
 58:
                    if(entity) { _fun00036_ip = 75; continue _fun00035 }
 61:
                    michal = 40;
                    michal = tangon[michal];
                    yankee = zuuluu.bind(report)(michal);
                    _fun00036_ip = 87; continue _fun00035;
 75:
                    michal = 39;
                    michal = tangon[michal];
                    yankee = zuuluu.bind(report)(michal);
 87:
                    _fun00036_ip = 121; continue _fun00035;
 89:
                    if(entity) { _fun00036_ip = 106; continue _fun00035 }
 92:
                    entity = 38;
                    entity = tangon[entity];
                    entity = zuuluu.bind(report)(entity);
                    _fun00036_ip = 118; continue _fun00035;
 106:
                    michal = 37;
                    michal = tangon[michal];
                    entity = zuuluu.bind(report)(michal);
 118:
                    yankee = entity;
 121:
                    entity = _closure2_slot19;
                    tangon = _closure1_slot23;
                    if(entity) { _fun00036_ip = 651; continue _fun00035 }
 135:
                    michal = _closure1_slot6;
                    entity = {};
                    romeon = _closure2_slot1;
                    zuuluu = romeon.emptySubheaderContainer;
                    entity['style'] = zuuluu;
                    oscard = _closure1_slot22;
                    zuuluu = {};
                    option = romeon.emptyIlloContainer;
                    zuuluu['style'] = option;
                    verify = _closure1_slot1;
                    foxtra = _closure1_slot3;
                    option = 41;
                    option = foxtra[option];
                    verify = verify.bind(report)(option);
                    option = {};
                    foxtra = romeon.emptyIllo;
                    romeon = new Array(2);
                    romeon[0] = foxtra;
                    backup = _closure2_slot3;
                    foxtra = null;
                    if(!backup) { _fun00036_ip = 226; continue _fun00035 }
 216:
                    backup = _closure2_slot1;
                    foxtra = backup.emptyIlloLarge;
 226:
                    romeon[1] = foxtra;
                    option['style'] = romeon;
                    option['source'] = yankee;
                    option = oscard.bind(report)(verify, option);
                    zuuluu['children'] = option;
                    oscard = oscard.bind(report)(michal, zuuluu);
                    zuuluu = new Array(3);
                    zuuluu[0] = oscard;
                    romeon = _closure1_slot23;
                    verify = _closure1_slot6;
                    oscard = {};
                    yankee = _closure2_slot1;
                    option = yankee.emptySubheaderBody;
                    oscard['style'] = option;
                    option = _closure1_slot22;
                    echoed = _closure1_slot0;
                    update = _closure1_slot3;
                    backup = 35;
                    foxtra = update[backup];
                    foxtra = echoed.bind(report)(foxtra);
                    kiloes = foxtra.Text;
                    foxtra = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
                    sizing = yankee.subheader;
                    foxtra['style'] = sizing;
                    sizing = 32;
                    output = update[sizing];
                    output = echoed.bind(report)(output);
                    source = output.intl;
                    result = source.string;
                    output = update[sizing];
                    output = echoed.bind(report)(output);
                    output = output.t;
                    output = output.ALlnbm;
                    output = result.bind(source)(output);
                    foxtra['children'] = output;
                    kiloes = option.bind(report)(kiloes, foxtra);
                    foxtra = new Array(3);
                    foxtra[0] = kiloes;
                    backup = update[backup];
                    backup = echoed.bind(report)(backup);
                    kiloes = backup.Text;
                    backup = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
                    output = yankee.subheaderBody;
                    backup['style'] = output;
                    output = update[sizing];
                    output = echoed.bind(report)(output);
                    source = output.intl;
                    result = source.string;
                    output = update[sizing];
                    output = echoed.bind(report)(output);
                    output = output.t;
                    output = output.1ydhVl;
                    output = result.bind(source)(output);
                    backup['children'] = output;
                    backup = option.bind(report)(kiloes, backup);
                    foxtra[1] = backup;
                    kiloes = _closure1_slot1;
                    backup = 42;
                    backup = update[backup];
                    kiloes = kiloes.bind(report)(backup);
                    backup = {};
                    output = yankee.subheaderButton;
                    backup['style'] = output;
                    output = update[sizing];
                    output = echoed.bind(report)(output);
                    result = output.intl;
                    output = result.string;
                    sizing = update[sizing];
                    sizing = echoed.bind(report)(sizing);
                    sizing = sizing.t;
                    sizing = sizing.JZZjQE;
                    sizing = output.bind(result)(sizing);
                    backup['text'] = sizing;
                    sizing = _closure2_slot20;
                    backup['onPress'] = sizing;
                    backup = option.bind(report)(kiloes, backup);
                    foxtra[2] = backup;
                    oscard['children'] = foxtra;
                    oscard = romeon.bind(report)(verify, oscard);
                    zuuluu[1] = oscard;
                    oscard = {};
                    yankee = yankee.divider;
                    oscard['style'] = yankee;
                    oscard = option.bind(report)(verify, oscard);
                    zuuluu[2] = oscard;
                    entity['children'] = zuuluu;
                    entity = tangon.bind(report)(michal, entity);
                    _fun00036_ip = 839; continue _fun00035;
 651:
                    zuuluu = _closure1_slot24;
                    michal = {};
                    verify = _closure1_slot22;
                    option = _closure1_slot6;
                    oscard = {};
                    offset = _closure2_slot1;
                    yankee = offset.subheaderContainer;
                    oscard['style'] = yankee;
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot3;
                    golfie = 35;
                    golfie = sizing[golfie];
                    golfie = kiloes.bind(report)(golfie);
                    yankee = golfie.Text;
                    golfie = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-normal'};
                    romeon = offset.subheaderDescription;
                    golfie['style'] = romeon;
                    romeon = 32;
                    foxtra = sizing[romeon];
                    foxtra = kiloes.bind(report)(foxtra);
                    backup = foxtra.intl;
                    foxtra = backup.string;
                    romeon = sizing[romeon];
                    romeon = kiloes.bind(report)(romeon);
                    romeon = romeon.t;
                    romeon = romeon.1ydhVl;
                    romeon = foxtra.bind(backup)(romeon);
                    golfie['children'] = romeon;
                    golfie = verify.bind(report)(yankee, golfie);
                    oscard['children'] = golfie;
                    golfie = verify.bind(report)(option, oscard);
                    oscard = new Array(2);
                    oscard[0] = golfie;
                    golfie = {};
                    offset = offset.divider;
                    golfie['style'] = offset;
                    golfie = verify.bind(report)(option, golfie);
                    oscard[1] = golfie;
                    michal['children'] = oscard;
                    entity = tangon.bind(report)(zuuluu, michal);
 839:
                    return entity;
                }
            };
            vacuum = vacuum.bind(papara)(yankee, romeon);
            papara = _closure1_slot5;
            romeon = papara.useCallback;
            yankee = new Array(6);
            yankee[0] = output;
            yankee[1] = kiloes;
            yankee[2] = verify;
            yankee[3] = limora;
            yankee[4] = sierra;
            yankee[5] = offset;
            offset = function() {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    michal = _closure2_slot5;
                    entity = null;
                    if(!(entity != michal)) { _fun00038_ip = 219; continue _fun00037 }
 18:
                    zuuluu = _closure2_slot8;
                    michal = _closure1_slot8;
                    option = _closure2_slot5;
                    report = undefined;
                    michal = michal.bind(report)(option);
                    yankee = zuuluu[michal];
                    var _closure3_slot0 = yankee;
                    zuuluu = _closure1_slot2;
                    romeon = _closure1_slot3;
                    michal = 25;
                    michal = romeon[michal];
                    offset = zuuluu.bind(report)(michal);
                    tangon = offset.isRoleHigher;
                    kiloes = _closure2_slot10;
                    backup = _closure2_slot11;
                    output = offset;
                    sizing = option;
                    foxtra = yankee;
                    michal = output[tangon](sizing, kiloes, backup, foxtra, romeon);
                    offset = !michal;
                    tangon = _closure1_slot22;
                    zuuluu = _closure1_slot6;
                    michal = {};
                    golfie = _closure2_slot1;
                    golfie = golfie.everyoneWrapper;
                    michal['style'] = golfie;
                    golfie = _closure1_slot1;
                    oscard = 43;
                    oscard = romeon[oscard];
                    golfie = golfie.bind(report)(oscard);
                    oscard = {};
                    oscard['role'] = yankee;
                    oscard['locked'] = offset;
                    verify = function() { // Original name: onPress
                        zuuluu = _closure2_slot21;
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    oscard['onPress'] = verify;
                    option = option.id;
                    oscard['guildId'] = option;
                    option = false;
                    oscard['sorting'] = option;
                    option = 0;
                    oscard['numMembers'] = option;
                    option = true;
                    oscard['isEveryoneRole'] = option;
                    oscard['isLastRole'] = option;
                    oscard['isFirstRole'] = option;
                    oscard = tangon.bind(report)(golfie, oscard);
                    michal['children'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return michal;
 219:
                    return entity;
                }
            };
            papara = romeon.bind(papara)(offset, yankee);
            romeon = _closure1_slot5;
            yankee = romeon.useCallback;
            offset = new Array(8);
            offset[0] = verify;
            offset[1] = sizing;
            offset[2] = limora;
            offset[3] = sierra;
            offset[4] = foxtra;
            offset[5] = status;
            offset[6] = kiloes;
            offset[7] = golfie;
            golfie = function(argFoo, argBar) {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    option = argBar;
                    entity = _closure2_slot5;
                    romeon = null;
                    if(!(romeon != entity)) { _fun00040_ip = 314; continue _fun00039 }
 19:
                    michal = _closure2_slot17;
                    zuuluu = michal[option];
                    entity = zuuluu.role;
                    offset = zuuluu.memberCount;
                    verify = michal.length;
                    zuuluu = _closure1_slot2;
                    tangon = _closure1_slot3;
                    michal = 25;
                    michal = tangon[michal];
                    report = undefined;
                    yankee = zuuluu.bind(report)(michal);
                    golfie = yankee.isRoleHigher;
                    source = _closure2_slot5;
                    update = _closure2_slot10;
                    echoed = _closure2_slot11;
                    ctrled = yankee;
                    result = entity;
                    michal = ctrled[golfie](source, update, echoed, result, output);
                    yankee = !michal;
                    michal = _closure2_slot12;
                    if(michal) { _fun00040_ip = 115; continue _fun00039 }
 107:
                    michal = 0;
                    golfie = michal === option;
                    _fun00040_ip = 123; continue _fun00039;
 115:
                    michal = _closure2_slot18;
                    golfie = option === michal;
 123:
                    tangon = _closure1_slot22;
                    zuuluu = _closure1_slot1;
                    foxtra = _closure1_slot3;
                    michal = 43;
                    michal = foxtra[michal];
                    zuuluu = zuuluu.bind(report)(michal);
                    michal = {};
                    foxtra = _closure2_slot12;
                    michal['sorting'] = foxtra;
                    foxtra = _closure2_slot5;
                    foxtra = romeon != foxtra;
                    if(!foxtra) { _fun00040_ip = 215; continue _fun00039 }
 169:
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot3;
                    backup = 26;
                    backup = sizing[backup];
                    output = kiloes.bind(report)(backup);
                    sizing = output.isEveryoneRoleId;
                    backup = _closure2_slot5;
                    kiloes = backup.id;
                    backup = entity.id;
                    foxtra = sizing.bind(output)(kiloes, backup);
 215:
                    michal['isEveryoneRole'] = foxtra;
                    michal['role'] = entity;
                    michal['locked'] = yankee;
                    yankee = _closure2_slot21;
                    michal['onPress'] = yankee;
                    yankee = _closure2_slot5;
                    romeon = romeon == yankee;
                    yankee = undefined;
                    if(romeon) { _fun00040_ip = 260; continue _fun00039 }
 251:
                    romeon = _closure2_slot5;
                    yankee = romeon.id;
 260:
                    michal['guildId'] = yankee;
                    michal['numMembers'] = offset;
                    michal['isFirstRole'] = golfie;
                    golfie = 1;
                    golfie = verify - golfie;
                    golfie = option === golfie;
                    michal['isLastRole'] = golfie;
                    oscard = _closure2_slot22;
                    michal['onLongPress'] = oscard;
                    entity = entity.originalPosition;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    return entity;
 314:
                    tangon = _closure1_slot22;
                    zuuluu = _closure1_slot24;
                    michal = undefined;
                    entity = {};
                    entity = tangon.bind(michal)(zuuluu, entity);
                    return entity;
                }
            };
            romeon = yankee.bind(romeon)(golfie, offset);
            kiloes = _closure1_slot5;
            yankee = kiloes.useCallback;
            offset = function(argFoo, argBar) {
                michal = argFoo;
                entity = argBar;
                entity = michal !== entity;
                return entity;
            };
            golfie = new Array(0);
            kiloes = yankee.bind(kiloes)(offset, golfie);
            yankee = _closure1_slot5;
            offset = yankee.useEffect;
            golfie = new Array(6);
            golfie[0] = cntext;
            golfie[1] = ctrled;
            golfie[2] = report;
            golfie[3] = record;
            golfie[4] = foxtra;
            golfie[5] = zuuluu;
            report = function() {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.setOptions;
                    michal = {};
                    option = _closure2_slot12;
                    entity = undefined;
                    golfie = undefined;
                    if(!option) { _fun00042_ip = 35; continue _fun00041 }
 28:
                    golfie = function() {
                        tangon = _closure1_slot22;
                        option = _closure1_slot0;
                        verify = _closure1_slot3;
                        entity = 44;
                        entity = verify[entity];
                        zuuluu = undefined;
                        entity = option.bind(zuuluu)(entity);
                        michal = entity.HeaderActionButton;
                        entity = {};
                        report = _closure2_slot23;
                        entity['onPress'] = report;
                        report = 32;
                        oscard = verify[report];
                        oscard = option.bind(zuuluu)(oscard);
                        golfie = oscard.intl;
                        oscard = golfie.string;
                        report = verify[report];
                        report = option.bind(zuuluu)(report);
                        report = report.t;
                        report = report.ETE/oK;
                        report = oscard.bind(golfie)(report);
                        entity['text'] = report;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
 35:
                    michal['headerLeft'] = golfie;
                    golfie = _closure2_slot12;
                    if(golfie) { _fun00042_ip = 65; continue _fun00041 }
 47:
                    golfie = _closure2_slot19;
                    report = undefined;
                    if(!golfie) { _fun00042_ip = 63; continue _fun00041 }
 56:
                    report = function() {
                        tangon = _closure1_slot22;
                        option = _closure1_slot0;
                        verify = _closure1_slot3;
                        entity = 44;
                        entity = verify[entity];
                        zuuluu = undefined;
                        entity = option.bind(zuuluu)(entity);
                        michal = entity.HeaderActionButton;
                        entity = {};
                        oscard = _closure2_slot20;
                        entity['onPress'] = oscard;
                        oscard = _closure1_slot1;
                        report = 45;
                        report = verify[report];
                        report = oscard.bind(zuuluu)(report);
                        entity['source'] = report;
                        report = 32;
                        oscard = verify[report];
                        oscard = option.bind(zuuluu)(oscard);
                        golfie = oscard.intl;
                        oscard = golfie.string;
                        report = verify[report];
                        report = option.bind(zuuluu)(report);
                        report = report.t;
                        report = report.JZZjQE;
                        report = oscard.bind(golfie)(report);
                        entity['accessibilityLabel'] = report;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
 63:
                    _fun00042_ip = 72; continue _fun00041;
 65:
                    report = function() {
                        tangon = _closure1_slot22;
                        option = _closure1_slot0;
                        verify = _closure1_slot3;
                        entity = 44;
                        entity = verify[entity];
                        zuuluu = undefined;
                        entity = option.bind(zuuluu)(entity);
                        michal = entity.HeaderActionButton;
                        entity = {};
                        report = _closure2_slot24;
                        entity['onPress'] = report;
                        report = 32;
                        oscard = verify[report];
                        oscard = option.bind(zuuluu)(oscard);
                        golfie = oscard.intl;
                        oscard = golfie.string;
                        report = verify[report];
                        report = option.bind(zuuluu)(report);
                        report = report.t;
                        report = report.R3BPHx;
                        report = oscard.bind(golfie)(report);
                        entity['text'] = report;
                        entity = tangon.bind(zuuluu)(michal, entity);
                        return entity;
                    };
 72:
                    michal['headerRight'] = report;
                    option = _closure1_slot0;
                    verify = _closure1_slot3;
                    report = 32;
                    oscard = verify[report];
                    oscard = option.bind(entity)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.string;
                    report = verify[report];
                    report = option.bind(entity)(report);
                    report = report.t;
                    report = report.UvdTMj;
                    report = oscard.bind(golfie)(report);
                    michal['headerTitle'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            report = offset.bind(yankee)(report, golfie);
            offset = _closure1_slot5;
            golfie = offset.useEffect;
            report = new Array(3);
            report[0] = verify;
            report[1] = foxtra;
            report[2] = zuuluu;
            zuuluu = function() {
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    entity = _closure2_slot12;
                    if(!entity) { _fun00044_ip = 20; continue _fun00043 }
 10:
                    michal = _closure2_slot5;
                    entity = null;
                    if(!(entity == michal)) { _fun00044_ip = 57; continue _fun00043 }
 20:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 30;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.stopReordering;
                    entity = entity.bind(michal)();
                    _fun00044_ip = 102; continue _fun00043;
 57:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 30;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.startReordering;
                    entity = _closure2_slot5;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
 102:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 46;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.isIOS;
                    michal = michal.bind(zuuluu)();
                    if(!michal) { _fun00044_ip = 169; continue _fun00043 }
 140:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.setOptions;
                    michal = {};
                    report = _closure2_slot12;
                    report = !report;
                    michal['gestureEnabled'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 169:
                    return entity;
                }
            };
            zuuluu = golfie.bind(offset)(zuuluu, report);
            golfie = _closure1_slot5;
            report = golfie.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = verify;
            zuuluu[1] = michal;
            michal = function() {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    zuuluu = _closure2_slot5;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00046_ip = 145; continue _fun00045 }
 16:
                    report = _closure2_slot6;
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot3;
                    zuuluu = 47;
                    zuuluu = tangon[zuuluu];
                    tangon = undefined;
                    zuuluu = oscard.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.MAX_PREFETCH_MEMBER_COUNT;
                    if(!(report <= zuuluu)) { _fun00046_ip = 105; continue _fun00045 }
 55:
                    report = _closure1_slot1;
                    oscard = _closure1_slot3;
                    zuuluu = 48;
                    zuuluu = oscard[zuuluu];
                    verify = report.bind(tangon)(zuuluu);
                    option = verify.requestMembers;
                    zuuluu = _closure2_slot5;
                    foxtra = zuuluu.id;
                    romeon = '';
                    yankee = 0;
                    offset = false;
                    backup = verify;
                    zuuluu = backup[option](foxtra, romeon, yankee, offset, verify);
 105:
                    zuuluu = _closure1_slot2;
                    report = _closure1_slot3;
                    michal = 49;
                    michal = report[michal];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.fetchMemberCounts;
                    entity = _closure2_slot5;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
 145:
                    entity = undefined;
                    return entity;
                }
            };
            michal = report.bind(golfie)(michal, zuuluu);
            report = _closure1_slot5;
            zuuluu = report.useEffect;
            michal = new Array(1);
            michal[0] = foxtra;
            entity = function() {
                entity = function() {
                    _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                        entity = _closure2_slot12;
                        if(!entity) { _fun00048_ip = 45; continue _fun00047 }
 10:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot3;
                        entity = 30;
                        michal = michal[entity];
                        entity = undefined;
                        michal = zuuluu.bind(entity)(michal);
                        entity = michal.stopReordering;
                        entity = entity.bind(michal)();
 45:
                        entity = undefined;
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot23;
            michal = _closure1_slot24;
            entity = {};
            golfie = null;
            if(foxtra) { _fun00008_ip = 1286; continue _fun00007 }
 1136:
            report = 10;
            report = option < report;
            golfie = null;
            if(report) { _fun00008_ip = 1286; continue _fun00007 }
 1151:
            verify = _closure1_slot22;
            option = _closure1_slot6;
            report = {};
            yankee = output.searchWrapper;
            offset = new Array(2);
            offset[0] = yankee;
            yankee = {};
            update = 0;
            if(!target) { _fun00008_ip = 1212; continue _fun00007 }
 1182:
            cntext = _closure1_slot1;
            status = _closure1_slot3;
            ctrled = 16;
            ctrled = status[ctrled];
            ctrled = cntext.bind(tangon)(ctrled);
            ctrled = ctrled.spacing;
            update = ctrled.PX_16;
 1212:
            yankee['paddingBottom'] = update;
            offset[1] = yankee;
            report['style'] = offset;
            update = _closure1_slot22;
            yankee = _closure1_slot0;
            ctrled = _closure1_slot3;
            offset = 50;
            offset = ctrled[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.SearchField;
            offset = {};
            ctrled = 'md';
            offset['size'] = ctrled;
            offset['onChange'] = source;
            offset = update.bind(tangon)(yankee, offset);
            report['children'] = offset;
            golfie = verify.bind(tangon)(option, report);
 1286:
            report = new Array(4);
            report[0] = golfie;
            verify = _closure1_slot22;
            option = _closure1_slot6;
            golfie = {};
            offset = null;
            if(!foxtra) { _fun00008_ip = 1566; continue _fun00007 }
 1312:
            source = _closure1_slot23;
            update = _closure1_slot24;
            yankee = {};
            cntext = config.bind(tangon)();
            ctrled = new Array(2);
            ctrled[0] = cntext;
            cntext = null;
            if(record) { _fun00008_ip = 1552; continue _fun00007 }
 1342:
            limora = _closure1_slot22;
            variable38 = _closure1_slot0;
            variable39 = _closure1_slot3;
            status = 51;
            status = variable39[status];
            status = variable38.bind(tangon)(status);
            sierra = status.FormRow;
            status = {};
            variable36 = _closure1_slot1;
            quebec = 52;
            whisks = variable39[quebec];
            equals = variable36.bind(tangon)(whisks);
            whisks = {};
            variable37 = output.emptyRolesIcon;
            whisks['style'] = variable37;
            quebec = variable39[quebec];
            quebec = variable36.bind(tangon)(quebec);
            quebec = quebec.Sizes;
            quebec = quebec.LARGE;
            whisks['size'] = quebec;
            quebec = 53;
            quebec = variable39[quebec];
            quebec = variable36.bind(tangon)(quebec);
            whisks['source'] = quebec;
            whisks = limora.bind(tangon)(equals, whisks);
            status['leading'] = whisks;
            whisks = 35;
            whisks = variable39[whisks];
            whisks = variable38.bind(tangon)(whisks);
            equals = whisks.Text;
            whisks = {'variant': 'text-md/semibold', 'color': 'interactive-normal'};
            quebec = 32;
            variable36 = variable39[quebec];
            variable36 = variable38.bind(tangon)(variable36);
            variable37 = variable36.intl;
            variable36 = variable37.string;
            quebec = variable39[quebec];
            quebec = variable38.bind(tangon)(quebec);
            quebec = quebec.t;
            quebec = quebec.nZfHsb;
            quebec = variable36.bind(variable37)(quebec);
            whisks['children'] = quebec;
            whisks = limora.bind(tangon)(equals, whisks);
            status['label'] = whisks;
            cntext = limora.bind(tangon)(sierra, status);
 1552:
            ctrled[1] = cntext;
            yankee['children'] = ctrled;
            offset = source.bind(tangon)(update, yankee);
 1566:
            golfie['children'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            report[1] = golfie;
            verify = _closure1_slot22;
            option = _closure1_slot6;
            golfie = {};
            offset = output.container;
            golfie['style'] = offset;
            yankee = _closure1_slot1;
            update = _closure1_slot3;
            offset = 54;
            offset = update[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            offset['ref'] = echoed;
            echoed = null;
            if(foxtra) { _fun00008_ip = 1693; continue _fun00007 }
 1630:
            ctrled = _closure1_slot23;
            source = _closure1_slot24;
            update = {};
            cntext = null;
            if(target) { _fun00008_ip = 1649; continue _fun00007 }
 1645:
            cntext = vacuum.bind(tangon)();
 1649:
            vacuum = new Array(3);
            vacuum[0] = cntext;
            cntext = null;
            if(target) { _fun00008_ip = 1666; continue _fun00007 }
 1662:
            cntext = papara.bind(tangon)();
 1666:
            vacuum[1] = cntext;
            sequen = null;
            if(!record) { _fun00008_ip = 1679; continue _fun00007 }
 1675:
            sequen = config.bind(tangon)();
 1679:
            vacuum[2] = sequen;
            update['children'] = vacuum;
            echoed = ctrled.bind(tangon)(source, update);
 1693:
            offset['header'] = echoed;
            echoed = output.container;
            offset['wrapperStyles'] = echoed;
            echoed = output.scrollContainer;
            output = new Array(2);
            output[0] = echoed;
            output[1] = result;
            offset['contentContainerStyle'] = output;
            offset['data'] = sizing;
            offset['rowHasChanged'] = kiloes;
            offset['onRowMoved'] = backup;
            foxtra = !foxtra;
            offset['disableSorting'] = foxtra;
            offset['renderRow'] = romeon;
            romeon = 'handled';
            offset['keyboardShouldPersistTaps'] = romeon;
            romeon = 16;
            offset['scrollEventThrottle'] = romeon;
            romeon = true;
            offset['scrollEnabled'] = romeon;
            offset = verify.bind(tangon)(yankee, offset);
            golfie['children'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            report[2] = golfie;
            option = _closure1_slot22;
            golfie = _closure1_slot0;
            verify = _closure1_slot3;
            oscard = 55;
            oscard = verify[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.NavScrim;
            oscard = {};
            oscard = option.bind(tangon)(golfie, oscard);
            report[3] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();
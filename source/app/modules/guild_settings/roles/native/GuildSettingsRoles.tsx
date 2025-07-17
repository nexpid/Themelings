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
    var _closure1_slot28 = entity;
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
                zuuluu = _closure1_slot28;
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
                report = _closure1_slot28;
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
        tangon = _closure1_slot28;
        tangon = tangon.bind(oscard)(report);
        entity['hasSearchQuery'] = tangon;
        entity['filteredRoles'] = zuuluu;
        entity['setSearchQuery'] = michal;
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: PinPermissionMigrationInfoBox
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = entity.guild;
            var _closure2_slot0 = report;
            entity = _closure1_slot27;
            tangon = undefined;
            oscard = entity.bind(tangon)();
            michal = _closure1_slot0;
            verify = _closure1_slot3;
            entity = 26;
            entity = verify[entity];
            golfie = michal.bind(tangon)(entity);
            zuuluu = golfie.dateFormat;
            michal = _closure1_slot1;
            entity = 27;
            entity = verify[entity];
            michal = michal.bind(tangon)(entity);
            entity = _closure1_slot23;
            michal = michal.bind(tangon)(entity);
            entity = 'LL';
            romeon = zuuluu.bind(golfie)(michal, entity);
            zuuluu = report.features;
            michal = zuuluu.has;
            entity = _closure1_slot22;
            entity = entity.PIN_PERMISSION_MIGRATION_COMPLETE;
            entity = michal.bind(zuuluu)(entity);
            if(entity) { _fun00008_ip = 306; continue _fun00007 }
 120:
            zuuluu = _closure1_slot13;
            michal = zuuluu.can;
            entity = _closure1_slot21;
            entity = entity.ADMINISTRATOR;
            report = michal.bind(zuuluu)(entity, report);
            zuuluu = _closure1_slot24;
            verify = _closure1_slot0;
            backup = _closure1_slot3;
            entity = 28;
            entity = backup[entity];
            entity = verify.bind(tangon)(entity);
            michal = entity.Text;
            entity = {};
            golfie = 'text-sm/normal';
            entity['variant'] = golfie;
            golfie = 24;
            offset = backup[golfie];
            offset = verify.bind(tangon)(offset);
            yankee = offset.intl;
            offset = yankee.format;
            golfie = backup[golfie];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.t;
            if(report) { _fun00008_ip = 259; continue _fun00007 }
 226:
            verify = golfie.cAuU1d;
            report = {};
            report['breakingChangeDate'] = romeon;
            report = offset.bind(yankee)(verify, report);
            entity['children'] = report;
            report = zuuluu.bind(tangon)(michal, entity);
            _fun00008_ip = 304; continue _fun00007;
 259:
            verify = golfie.DXvUMD;
            golfie = {};
            foxtra = function() { // Original name: onClickMigrate
                zuuluu = _closure1_slot1;
                golfie = _closure1_slot3;
                entity = 23;
                michal = golfie[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.show;
                michal = {};
                oscard = _closure1_slot0;
                report = 24;
                option = golfie[report];
                option = oscard.bind(entity)(option);
                offset = option.intl;
                verify = offset.string;
                option = golfie[report];
                option = oscard.bind(entity)(option);
                option = option.t;
                option = option.nFE8dH;
                option = verify.bind(offset)(option);
                michal['title'] = option;
                option = golfie[report];
                option = oscard.bind(entity)(option);
                yankee = option.intl;
                offset = yankee.format;
                option = golfie[report];
                option = oscard.bind(entity)(option);
                option = option.t;
                verify = option.1PAzQ0;
                option = {};
                romeon = _closure2_slot0;
                romeon = romeon.name;
                option['guildName'] = romeon;
                option = offset.bind(yankee)(verify, option);
                michal['body'] = option;
                option = golfie[report];
                option = oscard.bind(entity)(option);
                offset = option.intl;
                verify = offset.string;
                option = golfie[report];
                option = oscard.bind(entity)(option);
                option = option.t;
                option = option.ETE/oK;
                option = verify.bind(offset)(option);
                michal['cancelText'] = option;
                option = golfie[report];
                option = oscard.bind(entity)(option);
                verify = option.intl;
                option = verify.string;
                report = golfie[report];
                report = oscard.bind(entity)(report);
                report = report.t;
                report = report.cY+Ooa;
                report = option.bind(verify)(report);
                michal['confirmText'] = report;
                report = function() { // Original name: onConfirm
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 22;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.migratePinPermission;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal['onConfirm'] = report;
                report = false;
                michal['hideActionSheet'] = report;
                report = 25;
                report = golfie[report];
                report = oscard.bind(entity)(report);
                report = report.ButtonColors;
                report = report.BRAND;
                michal['confirmColor'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            golfie['onClickMigrate'] = foxtra;
            golfie['breakingChangeDate'] = romeon;
            golfie = offset.bind(yankee)(verify, golfie);
            entity['children'] = golfie;
            report = zuuluu.bind(tangon)(michal, entity);
 304:
            _fun00008_ip = 414; continue _fun00007;
 306:
            zuuluu = _closure1_slot24;
            verify = _closure1_slot0;
            foxtra = _closure1_slot3;
            entity = 28;
            entity = foxtra[entity];
            entity = verify.bind(tangon)(entity);
            michal = entity.Text;
            entity = {};
            golfie = 'text-sm/normal';
            entity['variant'] = golfie;
            golfie = 24;
            offset = foxtra[golfie];
            offset = verify.bind(tangon)(offset);
            yankee = offset.intl;
            offset = yankee.format;
            golfie = foxtra[golfie];
            golfie = verify.bind(tangon)(golfie);
            golfie = golfie.t;
            verify = golfie.Vg2oTE;
            golfie = {};
            golfie['breakingChangeDate'] = romeon;
            golfie = offset.bind(yankee)(verify, golfie);
            entity['children'] = golfie;
            report = zuuluu.bind(tangon)(michal, entity);
 414:
            zuuluu = _closure1_slot24;
            michal = _closure1_slot1;
            verify = _closure1_slot3;
            golfie = 29;
            entity = verify[golfie];
            michal = michal.bind(tangon)(entity);
            entity = {};
            option = _closure1_slot0;
            golfie = verify[golfie];
            golfie = option.bind(tangon)(golfie);
            golfie = golfie.InfoBoxLooks;
            golfie = golfie.WARNING;
            entity['look'] = golfie;
            oscard = oscard.migrationInfoBox;
            entity['style'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot30 = entity;
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
    golfie = tangon.Permissions;
    var _closure1_slot21 = golfie;
    golfie = tangon.GuildFeatures;
    var _closure1_slot22 = golfie;
    tangon = tangon.PIN_PERMISSION_MIGRATION_BREAKING_CHANGE_TIMESTAMP;
    var _closure1_slot23 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot24 = golfie;
    golfie = tangon.jsxs;
    var _closure1_slot25 = golfie;
    tangon = tangon.Fragment;
    var _closure1_slot26 = tangon;
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
    verify['marginTop'] = offset;
    tangon['migrationInfoBox'] = verify;
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
    var _closure1_slot27 = tangon;
    tangon = 61;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings/roles/native/GuildSettingsRoles.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ConnectedGuildSettingsModalRoles
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            golfie = michal.guildId;
            var _closure2_slot0 = golfie;
            echoed = michal.contentContainerStyle;
            tangon = undefined;
            var _closure2_slot12 = tangon;
            var _closure2_slot13 = tangon;
            var _closure2_slot14 = tangon;
            var _closure2_slot15 = tangon;
            var _closure2_slot16 = tangon;
            var _closure2_slot17 = tangon;
            var _closure2_slot18 = tangon;
            var _closure2_slot19 = tangon;
            var _closure2_slot20 = tangon;
            var _closure2_slot21 = tangon;
            var _closure2_slot22 = tangon;
            var _closure2_slot23 = tangon;
            var _closure2_slot24 = tangon;
            var _closure2_slot25 = tangon;
            michal = _closure1_slot27;
            result = michal.bind(tangon)();
            var _closure2_slot1 = result;
            zuuluu = _closure1_slot5;
            michal = zuuluu.useRef;
            config = null;
            update = michal.bind(zuuluu)(config);
            option = _closure1_slot0;
            yankee = _closure1_slot3;
            michal = 30;
            michal = yankee[michal];
            zuuluu = option.bind(tangon)(michal);
            michal = zuuluu.useNavigation;
            zuuluu = michal.bind(zuuluu)();
            var _closure2_slot2 = zuuluu;
            report = _closure1_slot1;
            michal = 31;
            michal = yankee[michal];
            michal = report.bind(tangon)(michal);
            whisks = michal.bind(tangon)();
            var _closure2_slot3 = whisks;
            michal = 20;
            report = yankee[michal];
            romeon = option.bind(tangon)(report);
            offset = romeon.useStateFromStores;
            report = _closure1_slot7;
            verify = new Array(1);
            verify[0] = report;
            report = function() {
                entity = _closure1_slot7;
                entity = entity.theme;
                return entity;
            };
            equals = offset.bind(romeon)(verify, report);
            var _closure2_slot4 = equals;
            michal = yankee[michal];
            offset = option.bind(tangon)(michal);
            verify = offset.useStateFromStoresObject;
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
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
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
                    if(yankee) { _fun00012_ip = 72; continue _fun00011 }
 67:
                    option = oscard.id;
 72:
                    verify = verify.bind(offset)(option);
                    offset = michal != verify;
                    option = 0;
                    if(!offset) { _fun00012_ip = 89; continue _fun00011 }
 86:
                    option = verify;
 89:
                    entity['memberCount'] = option;
                    offset = _closure1_slot14;
                    verify = offset.getRoleMemberCount;
                    yankee = michal == oscard;
                    option = undefined;
                    if(yankee) { _fun00012_ip = 118; continue _fun00011 }
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
                    if(!tangon) { _fun00012_ip = 213; continue _fun00011 }
 181:
                    tangon = _closure1_slot2;
                    option = _closure1_slot3;
                    zuuluu = 32;
                    zuuluu = option[zuuluu];
                    tangon = tangon.bind(golfie)(zuuluu);
                    zuuluu = tangon.getHighestRole;
                    michal = zuuluu.bind(tangon)(oscard, report);
 213:
                    entity['highestRole'] = michal;
                    return entity;
                }
            };
            report = verify.bind(offset)(report, michal);
            verify = report.guild;
            var _closure2_slot5 = verify;
            michal = report.memberCount;
            var _closure2_slot6 = michal;
            sizing = report.roleMemberCount;
            var _closure2_slot7 = sizing;
            offset = report.roles;
            var _closure2_slot8 = offset;
            output = report.rolesOrder;
            var _closure2_slot9 = output;
            limora = report.currentUserId;
            var _closure2_slot10 = limora;
            sierra = report.highestRole;
            var _closure2_slot11 = sierra;
            report = 33;
            report = yankee[report];
            report = option.bind(tangon)(report);
            yankee = report.GuildPinPermissionExperiment;
            option = yankee.useExperiment;
            report = {};
            foxtra = config == verify;
            romeon = undefined;
            if(foxtra) { _fun00010_ip = 402; continue _fun00009 }
 397:
            romeon = verify.id;
 402:
            report['guildId'] = romeon;
            romeon = 'GuildSettingsRoles';
            report['location'] = romeon;
            report = option.bind(yankee)(report);
            yankee = report.enabled;
            _closure2_slot12 = yankee;
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
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        michal = _closure3_slot1;
                        report = undefined;
                        if(michal) { _fun00014_ip = 16; continue _fun00013 }
 14:
                        return report;
 16:
                        michal = global;
                        tangon = michal.setTimeout;
                        zuuluu = function() {
                            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                entity = _closure3_slot0;
                                michal = entity.current;
                                tangon = null;
                                entity = tangon == michal;
                                zuuluu = michal;
                                if(entity) { _fun00016_ip = 37; continue _fun00015 }
 24:
                                michal = michal._listRef;
                                entity = tangon == michal;
                                zuuluu = michal;
 37:
                                michal = zuuluu;
                                if(entity) { _fun00016_ip = 55; continue _fun00015 }
 43:
                                zuuluu = zuuluu.current;
                                entity = tangon == zuuluu;
                                michal = zuuluu;
 55:
                                if(entity) { _fun00016_ip = 68; continue _fun00015 }
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
            report = report.bind(tangon)(update);
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
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        tangon = _closure1_slot12;
                        zuuluu = tangon.getGuild;
                        entity = _closure3_slot0;
                        report = zuuluu.bind(tangon)(entity);
                        entity = {};
                        zuuluu = null;
                        zuuluu = zuuluu != report;
                        if(!zuuluu) { _fun00018_ip = 50; continue _fun00017 }
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
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        entity = _closure3_slot2;
                        if(!entity) { _fun00020_ip = 14; continue _fun00019 }
 10:
                        entity = _closure3_slot1;
 14:
                        if(entity) { _fun00020_ip = 74; continue _fun00019 }
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
            romeon = 0;
            backup = golfie[romeon];
            _closure2_slot13 = backup;
            report = 1;
            report = golfie[report];
            _closure2_slot14 = report;
            report = _closure1_slot29;
            report = report.bind(tangon)(offset, backup);
            golfie = report.filteredRoles;
            _closure2_slot15 = golfie;
            status = report.hasSearchQuery;
            _closure2_slot16 = status;
            report = report.setSearchQuery;
            _closure2_slot17 = report;
            kiloes = _closure1_slot5;
            foxtra = kiloes.useMemo;
            option = new Array(7);
            option[0] = verify;
            option[1] = offset;
            option[2] = output;
            option[3] = sizing;
            option[4] = limora;
            option[5] = sierra;
            option[6] = golfie;
            golfie = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = _closure2_slot9;
                    tangon = null;
                    if(!(tangon == zuuluu)) { _fun00022_ip = 21; continue _fun00021 }
 15:
                    oscard = _closure2_slot15;
                    _fun00022_ip = 25; continue _fun00021;
 21:
                    oscard = _closure2_slot9;
 25:
                    report = oscard.filter;
                    zuuluu = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            tangon = argFoo;
                            entity = _closure2_slot5;
                            zuuluu = null;
                            entity = zuuluu != entity;
                            if(!entity) { _fun00024_ip = 68; continue _fun00023 }
 19:
                            golfie = _closure1_slot0;
                            oscard = _closure1_slot3;
                            report = 34;
                            oscard = oscard[report];
                            report = undefined;
                            golfie = golfie.bind(report)(oscard);
                            oscard = golfie.isEveryoneRoleId;
                            report = _closure2_slot5;
                            report = report.id;
                            report = oscard.bind(golfie)(report, tangon);
                            entity = !report;
 68:
                            if(!entity) { _fun00024_ip = 83; continue _fun00023 }
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
                        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
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
                            if(oscard) { _fun00026_ip = 49; continue _fun00025 }
 36:
                            report = _closure2_slot7;
                            tangon = tangon.id;
                            zuuluu = report[tangon];
 49:
                            tangon = michal != zuuluu;
                            michal = 0;
                            if(!tangon) { _fun00026_ip = 61; continue _fun00025 }
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
                    if(!oscard) { _fun00022_ip = 92; continue _fun00021 }
 74:
                    oscard = report.findIndex;
                    michal = function(argFoo) {
                        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                            michal = argFoo;
                            report = _closure1_slot2;
                            zuuluu = _closure1_slot3;
                            entity = 32;
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
                            if(report) { _fun00028_ip = 141; continue _fun00027 }
 71:
                            report = _closure1_slot0;
                            golfie = _closure1_slot3;
                            tangon = 34;
                            tangon = golfie[tangon];
                            report = report.bind(zuuluu)(tangon);
                            tangon = report.isEveryoneRoleId;
                            option = _closure2_slot5;
                            golfie = null;
                            golfie = golfie == option;
                            zuuluu = undefined;
                            if(golfie) { _fun00028_ip = 121; continue _fun00027 }
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
            golfie = foxtra.bind(kiloes)(golfie, option);
            output = golfie.roleData;
            _closure2_slot18 = output;
            papara = golfie.firstEditableIndex;
            _closure2_slot19 = papara;
            option = golfie.numSortableRoles;
            cntext = golfie.hasRoles;
            _closure2_slot20 = cntext;
            sizing = _closure1_slot5;
            kiloes = sizing.useCallback;
            foxtra = new Array(1);
            foxtra[0] = report;
            golfie = function(argFoo) {
                michal = argFoo;
                zuuluu = _closure2_slot17;
                entity = michal.toLowerCase;
                michal = entity.bind(michal)();
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            source = kiloes.bind(sizing)(golfie, foxtra);
            sizing = _closure1_slot5;
            kiloes = sizing.useCallback;
            foxtra = new Array(1);
            foxtra[0] = verify;
            golfie = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
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
                    golfie = 35;
                    golfie = verify[golfie];
                    verify = option.bind(entity)(golfie);
                    option = verify.collectGuildAnalyticsMetadata;
                    yankee = _closure2_slot5;
                    golfie = null;
                    yankee = golfie == yankee;
                    golfie = undefined;
                    if(yankee) { _fun00030_ip = 105; continue _fun00029 }
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
                    michal = 36;
                    michal = tangon[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.open;
                    michal = michal.bind(zuuluu)();
                    return entity;
                }
            };
            vacuum = kiloes.bind(sizing)(golfie, foxtra);
            _closure2_slot21 = vacuum;
            sizing = _closure1_slot5;
            kiloes = sizing.useCallback;
            foxtra = new Array(1);
            foxtra[0] = zuuluu;
            golfie = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    golfie = arguments[1];
                    entity = undefined;
                    if(!(golfie === entity)) { _fun00032_ip = 11; continue _fun00031 }
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
            sizing = kiloes.bind(sizing)(golfie, foxtra);
            _closure2_slot22 = sizing;
            ctrled = _closure1_slot5;
            kiloes = ctrled.useCallback;
            foxtra = new Array(1);
            foxtra[0] = report;
            golfie = function() {
                tangon = _closure2_slot14;
                entity = undefined;
                zuuluu = true;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = _closure2_slot17;
                michal = '';
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            golfie = kiloes.bind(ctrled)(golfie, foxtra);
            _closure2_slot23 = golfie;
            ctrled = _closure1_slot5;
            kiloes = ctrled.useCallback;
            foxtra = new Array(1);
            foxtra[0] = report;
            report = function() {
                tangon = _closure2_slot17;
                entity = undefined;
                zuuluu = '';
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = _closure2_slot14;
                michal = function(argFoo) {
                    entity = argFoo;
                    entity = !entity;
                    return entity;
                };
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            report = kiloes.bind(ctrled)(report, foxtra);
            _closure2_slot24 = report;
            sequen = _closure1_slot5;
            ctrled = sequen.useCallback;
            kiloes = new Array(2);
            kiloes[0] = verify;
            kiloes[1] = report;
            foxtra = function() {
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    zuuluu = _closure1_slot15;
                    michal = zuuluu.getUpdates;
                    tangon = michal.bind(zuuluu)();
                    zuuluu = tangon.length;
                    michal = 0;
                    michal = zuuluu > michal;
                    if(!michal) { _fun00034_ip = 46; continue _fun00033 }
 33:
                    report = _closure2_slot5;
                    zuuluu = null;
                    michal = zuuluu != report;
 46:
                    if(!michal) { _fun00034_ip = 95; continue _fun00033 }
 49:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 37;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.batchRoleUpdate;
                    entity = _closure2_slot5;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity, tangon);
 95:
                    michal = _closure2_slot24;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                }
            };
            ctrled = ctrled.bind(sequen)(foxtra, kiloes);
            _closure2_slot25 = ctrled;
            record = _closure1_slot5;
            sequen = record.useCallback;
            kiloes = function(argFoo) {
                michal = argFoo;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                entity = 38;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.updateRoleOrder;
                zuuluu = michal.from;
                michal = michal.to;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            foxtra = new Array(0);
            kiloes = sequen.bind(record)(kiloes, foxtra);
            target = _closure1_slot5;
            record = target.useCallback;
            sequen = new Array(5);
            sequen[0] = result;
            sequen[1] = output;
            sequen[2] = status;
            sequen[3] = backup;
            sequen[4] = report;
            foxtra = function() {
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    tangon = _closure1_slot25;
                    zuuluu = _closure1_slot6;
                    michal = {};
                    report = {};
                    entity = _closure2_slot1;
                    entity = entity.rolesHeader;
                    oscard = new Array(2);
                    oscard[0] = entity;
                    verify = _closure2_slot13;
                    entity = undefined;
                    option = undefined;
                    if(!verify) { _fun00036_ip = 57; continue _fun00035 }
 47:
                    verify = _closure2_slot1;
                    option = verify.edittingRolesHeader;
 57:
                    oscard[1] = option;
                    report['style'] = oscard;
                    verify = _closure1_slot24;
                    romeon = _closure1_slot0;
                    offset = _closure1_slot3;
                    oscard = 39;
                    oscard = offset[oscard];
                    oscard = romeon.bind(entity)(oscard);
                    option = oscard.TableRowGroupTitle;
                    oscard = {};
                    backup = 24;
                    foxtra = offset[backup];
                    foxtra = romeon.bind(entity)(foxtra);
                    kiloes = foxtra.intl;
                    foxtra = kiloes.formatToPlainString;
                    offset = offset[backup];
                    offset = romeon.bind(entity)(offset);
                    offset = offset.t;
                    romeon = offset.38N3V1;
                    offset = {};
                    sizing = _closure2_slot18;
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
                    offset = _closure2_slot13;
                    verify = null;
                    if(offset) { _fun00036_ip = 531; continue _fun00035 }
 217:
                    offset = _closure2_slot16;
                    verify = null;
                    if(offset) { _fun00036_ip = 531; continue _fun00035 }
 229:
                    foxtra = _closure1_slot25;
                    ctrled = _closure1_slot0;
                    echoed = _closure1_slot3;
                    offset = 40;
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
                    kiloes = _closure2_slot24;
                    offset['onPress'] = kiloes;
                    update = _closure2_slot1;
                    kiloes = update.reorderButton;
                    offset['style'] = kiloes;
                    output = _closure1_slot24;
                    kiloes = 41;
                    kiloes = echoed[kiloes];
                    kiloes = ctrled.bind(entity)(kiloes);
                    sizing = kiloes.ArrowsUpDownIcon;
                    kiloes = {};
                    source = _closure1_slot1;
                    result = 16;
                    result = echoed[result];
                    result = source.bind(entity)(result);
                    result = result.colors;
                    result = result.TEXT_LINK;
                    kiloes['color'] = result;
                    result = 'sm';
                    kiloes['size'] = result;
                    sizing = output.bind(entity)(sizing, kiloes);
                    kiloes = new Array(2);
                    kiloes[0] = sizing;
                    result = _closure1_slot24;
                    sizing = 28;
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
 531:
                    option[1] = verify;
                    report['children'] = option;
                    option = tangon.bind(entity)(zuuluu, report);
                    report = new Array(2);
                    report[0] = option;
                    option = _closure2_slot13;
                    oscard = null;
                    if(!option) { _fun00036_ip = 677; continue _fun00035 }
 562:
                    verify = _closure1_slot24;
                    foxtra = _closure1_slot0;
                    offset = _closure1_slot3;
                    golfie = 28;
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
 677:
                    report[1] = oscard;
                    michal['children'] = report;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                }
            };
            record = record.bind(target)(foxtra, sequen);
            target = _closure1_slot5;
            sequen = target.useCallback;
            foxtra = new Array(7);
            foxtra[0] = result;
            foxtra[1] = vacuum;
            foxtra[2] = cntext;
            foxtra[3] = equals;
            foxtra[4] = whisks;
            foxtra[5] = verify;
            foxtra[6] = yankee;
            yankee = function() {
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    michal = _closure2_slot3;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot3;
                    entity = 42;
                    entity = tangon[entity];
                    report = undefined;
                    tangon = zuuluu.bind(report)(entity);
                    zuuluu = tangon.isThemeDark;
                    entity = _closure2_slot4;
                    entity = zuuluu.bind(tangon)(entity);
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot3;
                    if(michal) { _fun00038_ip = 89; continue _fun00037 }
 58:
                    if(entity) { _fun00038_ip = 75; continue _fun00037 }
 61:
                    michal = 46;
                    michal = tangon[michal];
                    romeon = zuuluu.bind(report)(michal);
                    _fun00038_ip = 87; continue _fun00037;
 75:
                    michal = 45;
                    michal = tangon[michal];
                    romeon = zuuluu.bind(report)(michal);
 87:
                    _fun00038_ip = 121; continue _fun00037;
 89:
                    if(entity) { _fun00038_ip = 106; continue _fun00037 }
 92:
                    entity = 44;
                    entity = tangon[entity];
                    entity = zuuluu.bind(report)(entity);
                    _fun00038_ip = 118; continue _fun00037;
 106:
                    michal = 43;
                    michal = tangon[michal];
                    entity = zuuluu.bind(report)(michal);
 118:
                    romeon = entity;
 121:
                    entity = _closure2_slot20;
                    tangon = _closure1_slot25;
                    if(entity) { _fun00038_ip = 667; continue _fun00037 }
 135:
                    michal = _closure1_slot6;
                    entity = {};
                    foxtra = _closure2_slot1;
                    zuuluu = foxtra.emptySubheaderContainer;
                    entity['style'] = zuuluu;
                    oscard = _closure1_slot24;
                    zuuluu = {};
                    option = foxtra.emptyIlloContainer;
                    zuuluu['style'] = option;
                    yankee = _closure1_slot24;
                    verify = _closure1_slot1;
                    backup = _closure1_slot3;
                    option = 47;
                    option = backup[option];
                    verify = verify.bind(report)(option);
                    option = {};
                    backup = foxtra.emptyIllo;
                    foxtra = new Array(2);
                    foxtra[0] = backup;
                    kiloes = _closure2_slot3;
                    backup = null;
                    if(!kiloes) { _fun00038_ip = 230; continue _fun00037 }
 220:
                    kiloes = _closure2_slot1;
                    backup = kiloes.emptyIlloLarge;
 230:
                    foxtra[1] = backup;
                    option['style'] = foxtra;
                    option['source'] = romeon;
                    option = yankee.bind(report)(verify, option);
                    zuuluu['children'] = option;
                    oscard = oscard.bind(report)(michal, zuuluu);
                    zuuluu = new Array(3);
                    zuuluu[0] = oscard;
                    option = _closure1_slot25;
                    verify = _closure1_slot6;
                    oscard = {};
                    yankee = _closure2_slot1;
                    romeon = yankee.emptySubheaderBody;
                    oscard['style'] = romeon;
                    kiloes = _closure1_slot24;
                    echoed = _closure1_slot0;
                    update = _closure1_slot3;
                    foxtra = 28;
                    romeon = update[foxtra];
                    romeon = echoed.bind(report)(romeon);
                    backup = romeon.Text;
                    romeon = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
                    sizing = yankee.subheader;
                    romeon['style'] = sizing;
                    sizing = 24;
                    output = update[sizing];
                    output = echoed.bind(report)(output);
                    source = output.intl;
                    result = source.string;
                    output = update[sizing];
                    output = echoed.bind(report)(output);
                    output = output.t;
                    output = output.ALlnbm;
                    output = result.bind(source)(output);
                    romeon['children'] = output;
                    backup = kiloes.bind(report)(backup, romeon);
                    romeon = new Array(3);
                    romeon[0] = backup;
                    kiloes = _closure1_slot24;
                    foxtra = update[foxtra];
                    foxtra = echoed.bind(report)(foxtra);
                    backup = foxtra.Text;
                    foxtra = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
                    output = yankee.subheaderBody;
                    foxtra['style'] = output;
                    output = update[sizing];
                    output = echoed.bind(report)(output);
                    source = output.intl;
                    result = source.string;
                    output = update[sizing];
                    output = echoed.bind(report)(output);
                    output = output.t;
                    output = output.1ydhVl;
                    output = result.bind(source)(output);
                    foxtra['children'] = output;
                    foxtra = kiloes.bind(report)(backup, foxtra);
                    romeon[1] = foxtra;
                    kiloes = _closure1_slot24;
                    backup = _closure1_slot1;
                    foxtra = 25;
                    foxtra = update[foxtra];
                    backup = backup.bind(report)(foxtra);
                    foxtra = {};
                    output = yankee.subheaderButton;
                    foxtra['style'] = output;
                    output = update[sizing];
                    output = echoed.bind(report)(output);
                    result = output.intl;
                    output = result.string;
                    sizing = update[sizing];
                    sizing = echoed.bind(report)(sizing);
                    sizing = sizing.t;
                    sizing = sizing.JZZjQE;
                    sizing = output.bind(result)(sizing);
                    foxtra['text'] = sizing;
                    sizing = _closure2_slot21;
                    foxtra['onPress'] = sizing;
                    foxtra = kiloes.bind(report)(backup, foxtra);
                    romeon[2] = foxtra;
                    oscard['children'] = romeon;
                    oscard = option.bind(report)(verify, oscard);
                    zuuluu[1] = oscard;
                    option = _closure1_slot24;
                    oscard = {};
                    yankee = yankee.divider;
                    oscard['style'] = yankee;
                    oscard = option.bind(report)(verify, oscard);
                    zuuluu[2] = oscard;
                    entity['children'] = zuuluu;
                    entity = tangon.bind(report)(michal, entity);
                    _fun00038_ip = 927; continue _fun00037;
 667:
                    zuuluu = _closure1_slot26;
                    michal = {};
                    option = _closure1_slot6;
                    oscard = {};
                    foxtra = _closure2_slot1;
                    verify = foxtra.subheaderContainer;
                    oscard['style'] = verify;
                    romeon = _closure1_slot24;
                    sizing = _closure1_slot0;
                    output = _closure1_slot3;
                    verify = 28;
                    verify = output[verify];
                    verify = sizing.bind(report)(verify);
                    yankee = verify.Text;
                    verify = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-normal'};
                    foxtra = foxtra.subheaderDescription;
                    verify['style'] = foxtra;
                    foxtra = 24;
                    backup = output[foxtra];
                    backup = sizing.bind(report)(backup);
                    kiloes = backup.intl;
                    backup = kiloes.string;
                    foxtra = output[foxtra];
                    foxtra = sizing.bind(report)(foxtra);
                    foxtra = foxtra.t;
                    foxtra = foxtra.1ydhVl;
                    foxtra = backup.bind(kiloes)(foxtra);
                    verify['children'] = foxtra;
                    yankee = romeon.bind(report)(yankee, verify);
                    verify = new Array(2);
                    verify[0] = yankee;
                    romeon = _closure2_slot12;
                    foxtra = null;
                    yankee = null;
                    if(!romeon) { _fun00038_ip = 861; continue _fun00037 }
 824:
                    romeon = _closure2_slot5;
                    romeon = foxtra != romeon;
                    yankee = null;
                    if(!romeon) { _fun00038_ip = 861; continue _fun00037 }
 837:
                    backup = _closure1_slot24;
                    foxtra = _closure1_slot30;
                    romeon = {};
                    kiloes = _closure2_slot5;
                    romeon['guild'] = kiloes;
                    yankee = backup.bind(report)(foxtra, romeon);
 861:
                    verify[1] = yankee;
                    oscard['children'] = verify;
                    option = tangon.bind(report)(option, oscard);
                    oscard = new Array(2);
                    oscard[0] = option;
                    verify = _closure1_slot24;
                    option = _closure1_slot6;
                    golfie = {};
                    offset = _closure2_slot1;
                    offset = offset.divider;
                    golfie['style'] = offset;
                    golfie = verify.bind(report)(option, golfie);
                    oscard[1] = golfie;
                    michal['children'] = oscard;
                    entity = tangon.bind(report)(zuuluu, michal);
 927:
                    return entity;
                }
            };
            sequen = sequen.bind(target)(yankee, foxtra);
            target = _closure1_slot5;
            foxtra = target.useCallback;
            yankee = new Array(6);
            yankee[0] = result;
            yankee[1] = sizing;
            yankee[2] = verify;
            yankee[3] = limora;
            yankee[4] = sierra;
            yankee[5] = offset;
            offset = function() {
                _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                    michal = _closure2_slot5;
                    entity = null;
                    if(!(entity != michal)) { _fun00040_ip = 223; continue _fun00039 }
 18:
                    zuuluu = _closure2_slot8;
                    michal = _closure1_slot8;
                    verify = _closure2_slot5;
                    report = undefined;
                    michal = michal.bind(report)(verify);
                    romeon = zuuluu[michal];
                    var _closure3_slot0 = romeon;
                    zuuluu = _closure1_slot2;
                    foxtra = _closure1_slot3;
                    michal = 32;
                    michal = foxtra[michal];
                    option = zuuluu.bind(report)(michal);
                    tangon = option.isRoleHigher;
                    sizing = _closure2_slot10;
                    kiloes = _closure2_slot11;
                    result = option;
                    output = verify;
                    backup = romeon;
                    michal = result[tangon](output, sizing, kiloes, backup, foxtra);
                    yankee = !michal;
                    tangon = _closure1_slot24;
                    zuuluu = _closure1_slot6;
                    michal = {};
                    golfie = _closure2_slot1;
                    golfie = golfie.everyoneWrapper;
                    michal['style'] = golfie;
                    option = _closure1_slot24;
                    golfie = _closure1_slot1;
                    oscard = 48;
                    oscard = foxtra[oscard];
                    golfie = golfie.bind(report)(oscard);
                    oscard = {};
                    oscard['role'] = romeon;
                    oscard['locked'] = yankee;
                    offset = function() { // Original name: onPress
                        zuuluu = _closure2_slot22;
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    oscard['onPress'] = offset;
                    verify = verify.id;
                    oscard['guildId'] = verify;
                    verify = false;
                    oscard['sorting'] = verify;
                    verify = 0;
                    oscard['numMembers'] = verify;
                    verify = true;
                    oscard['isEveryoneRole'] = verify;
                    oscard['isLastRole'] = verify;
                    oscard['isFirstRole'] = verify;
                    oscard = option.bind(report)(golfie, oscard);
                    michal['children'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return michal;
 223:
                    return entity;
                }
            };
            target = foxtra.bind(target)(offset, yankee);
            foxtra = _closure1_slot5;
            yankee = foxtra.useCallback;
            offset = new Array(8);
            offset[0] = verify;
            offset[1] = output;
            offset[2] = limora;
            offset[3] = sierra;
            offset[4] = backup;
            offset[5] = papara;
            offset[6] = sizing;
            offset[7] = golfie;
            golfie = function(argFoo, argBar) {
                _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                    option = argBar;
                    entity = _closure2_slot5;
                    romeon = null;
                    if(!(romeon != entity)) { _fun00042_ip = 318; continue _fun00041 }
 19:
                    entity = _closure2_slot18;
                    michal = entity[option];
                    entity = michal.role;
                    offset = michal.memberCount;
                    michal = _closure2_slot18;
                    verify = michal.length;
                    zuuluu = _closure1_slot2;
                    tangon = _closure1_slot3;
                    michal = 32;
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
                    michal = _closure2_slot13;
                    if(michal) { _fun00042_ip = 119; continue _fun00041 }
 111:
                    michal = 0;
                    golfie = michal === option;
                    _fun00042_ip = 127; continue _fun00041;
 119:
                    michal = _closure2_slot19;
                    golfie = option === michal;
 127:
                    tangon = _closure1_slot24;
                    zuuluu = _closure1_slot1;
                    foxtra = _closure1_slot3;
                    michal = 48;
                    michal = foxtra[michal];
                    zuuluu = zuuluu.bind(report)(michal);
                    michal = {};
                    foxtra = _closure2_slot13;
                    michal['sorting'] = foxtra;
                    foxtra = _closure2_slot5;
                    foxtra = romeon != foxtra;
                    if(!foxtra) { _fun00042_ip = 219; continue _fun00041 }
 173:
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot3;
                    backup = 34;
                    backup = sizing[backup];
                    output = kiloes.bind(report)(backup);
                    sizing = output.isEveryoneRoleId;
                    backup = _closure2_slot5;
                    kiloes = backup.id;
                    backup = entity.id;
                    foxtra = sizing.bind(output)(kiloes, backup);
 219:
                    michal['isEveryoneRole'] = foxtra;
                    michal['role'] = entity;
                    michal['locked'] = yankee;
                    yankee = _closure2_slot22;
                    michal['onPress'] = yankee;
                    yankee = _closure2_slot5;
                    romeon = romeon == yankee;
                    yankee = undefined;
                    if(romeon) { _fun00042_ip = 264; continue _fun00041 }
 255:
                    romeon = _closure2_slot5;
                    yankee = romeon.id;
 264:
                    michal['guildId'] = yankee;
                    michal['numMembers'] = offset;
                    michal['isFirstRole'] = golfie;
                    golfie = 1;
                    golfie = verify - golfie;
                    golfie = option === golfie;
                    michal['isLastRole'] = golfie;
                    oscard = _closure2_slot23;
                    michal['onLongPress'] = oscard;
                    entity = entity.originalPosition;
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    return entity;
 318:
                    tangon = _closure1_slot24;
                    zuuluu = _closure1_slot26;
                    michal = undefined;
                    entity = {};
                    entity = tangon.bind(michal)(zuuluu, entity);
                    return entity;
                }
            };
            foxtra = yankee.bind(foxtra)(golfie, offset);
            sizing = _closure1_slot5;
            yankee = sizing.useCallback;
            offset = function(argFoo, argBar) {
                michal = argFoo;
                entity = argBar;
                entity = michal !== entity;
                return entity;
            };
            golfie = new Array(0);
            sizing = yankee.bind(sizing)(offset, golfie);
            yankee = _closure1_slot5;
            offset = yankee.useEffect;
            golfie = new Array(6);
            golfie[0] = vacuum;
            golfie[1] = ctrled;
            golfie[2] = report;
            golfie[3] = cntext;
            golfie[4] = backup;
            golfie[5] = zuuluu;
            report = function() {
                _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.setOptions;
                    michal = {};
                    option = _closure2_slot13;
                    entity = undefined;
                    golfie = undefined;
                    if(!option) { _fun00044_ip = 35; continue _fun00043 }
 28:
                    golfie = function() {
                        tangon = _closure1_slot24;
                        option = _closure1_slot0;
                        verify = _closure1_slot3;
                        entity = 49;
                        entity = verify[entity];
                        zuuluu = undefined;
                        entity = option.bind(zuuluu)(entity);
                        michal = entity.HeaderActionButton;
                        entity = {};
                        report = _closure2_slot24;
                        entity['onPress'] = report;
                        report = 24;
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
                    golfie = _closure2_slot13;
                    if(golfie) { _fun00044_ip = 65; continue _fun00043 }
 47:
                    golfie = _closure2_slot20;
                    report = undefined;
                    if(!golfie) { _fun00044_ip = 63; continue _fun00043 }
 56:
                    report = function() {
                        tangon = _closure1_slot24;
                        option = _closure1_slot0;
                        verify = _closure1_slot3;
                        entity = 49;
                        entity = verify[entity];
                        zuuluu = undefined;
                        entity = option.bind(zuuluu)(entity);
                        michal = entity.HeaderActionButton;
                        entity = {};
                        oscard = _closure2_slot21;
                        entity['onPress'] = oscard;
                        oscard = _closure1_slot1;
                        report = 50;
                        report = verify[report];
                        report = oscard.bind(zuuluu)(report);
                        entity['source'] = report;
                        report = 24;
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
                    _fun00044_ip = 72; continue _fun00043;
 65:
                    report = function() {
                        tangon = _closure1_slot24;
                        option = _closure1_slot0;
                        verify = _closure1_slot3;
                        entity = 49;
                        entity = verify[entity];
                        zuuluu = undefined;
                        entity = option.bind(zuuluu)(entity);
                        michal = entity.HeaderActionButton;
                        entity = {};
                        report = _closure2_slot25;
                        entity['onPress'] = report;
                        report = 24;
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
                    report = 24;
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
            report[1] = backup;
            report[2] = zuuluu;
            zuuluu = function() {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    entity = _closure2_slot13;
                    if(!entity) { _fun00046_ip = 20; continue _fun00045 }
 10:
                    michal = _closure2_slot5;
                    entity = null;
                    if(!(entity == michal)) { _fun00046_ip = 57; continue _fun00045 }
 20:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 38;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.stopReordering;
                    entity = entity.bind(michal)();
                    _fun00046_ip = 102; continue _fun00045;
 57:
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot3;
                    entity = 38;
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
                    entity = 51;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.isIOS;
                    michal = michal.bind(zuuluu)();
                    if(!michal) { _fun00046_ip = 169; continue _fun00045 }
 140:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.setOptions;
                    michal = {};
                    report = _closure2_slot13;
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
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    zuuluu = _closure2_slot5;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00048_ip = 145; continue _fun00047 }
 16:
                    report = _closure2_slot6;
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot3;
                    zuuluu = 52;
                    zuuluu = tangon[zuuluu];
                    tangon = undefined;
                    zuuluu = oscard.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.MAX_PREFETCH_MEMBER_COUNT;
                    if(!(report <= zuuluu)) { _fun00048_ip = 105; continue _fun00047 }
 55:
                    report = _closure1_slot1;
                    oscard = _closure1_slot3;
                    zuuluu = 53;
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
                    michal = 54;
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
            michal[0] = backup;
            entity = function() {
                entity = function() {
                    _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                        entity = _closure2_slot13;
                        if(!entity) { _fun00050_ip = 45; continue _fun00049 }
 10:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot3;
                        entity = 38;
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
            zuuluu = _closure1_slot25;
            michal = _closure1_slot26;
            entity = {};
            golfie = null;
            if(backup) { _fun00010_ip = 1418; continue _fun00009 }
 1268:
            report = 10;
            report = option < report;
            golfie = null;
            if(report) { _fun00010_ip = 1418; continue _fun00009 }
 1283:
            verify = _closure1_slot24;
            option = _closure1_slot6;
            report = {};
            yankee = result.searchWrapper;
            offset = new Array(2);
            offset[0] = yankee;
            yankee = {};
            romeon = 0;
            if(!status) { _fun00010_ip = 1344; continue _fun00009 }
 1314:
            vacuum = _closure1_slot1;
            papara = _closure1_slot3;
            ctrled = 16;
            ctrled = papara[ctrled];
            ctrled = vacuum.bind(tangon)(ctrled);
            ctrled = ctrled.spacing;
            romeon = ctrled.PX_16;
 1344:
            yankee['paddingBottom'] = romeon;
            offset[1] = yankee;
            report['style'] = offset;
            romeon = _closure1_slot24;
            yankee = _closure1_slot0;
            ctrled = _closure1_slot3;
            offset = 55;
            offset = ctrled[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.SearchField;
            offset = {};
            ctrled = 'md';
            offset['size'] = ctrled;
            offset['onChange'] = source;
            offset = romeon.bind(tangon)(yankee, offset);
            report['children'] = offset;
            golfie = verify.bind(tangon)(option, report);
 1418:
            report = new Array(4);
            report[0] = golfie;
            verify = _closure1_slot24;
            option = _closure1_slot6;
            golfie = {};
            offset = null;
            if(!backup) { _fun00010_ip = 1706; continue _fun00009 }
 1444:
            source = _closure1_slot25;
            romeon = _closure1_slot26;
            yankee = {};
            vacuum = record.bind(tangon)();
            ctrled = new Array(2);
            ctrled[0] = vacuum;
            vacuum = null;
            if(cntext) { _fun00010_ip = 1692; continue _fun00009 }
 1474:
            limora = _closure1_slot24;
            variable39 = _closure1_slot0;
            variable40 = _closure1_slot3;
            papara = 56;
            papara = variable40[papara];
            papara = variable39.bind(tangon)(papara);
            sierra = papara.FormRow;
            papara = {};
            quebec = _closure1_slot24;
            variable37 = _closure1_slot1;
            variable36 = 57;
            whisks = variable40[variable36];
            equals = variable37.bind(tangon)(whisks);
            whisks = {};
            variable38 = result.emptyRolesIcon;
            whisks['style'] = variable38;
            variable36 = variable40[variable36];
            variable36 = variable37.bind(tangon)(variable36);
            variable36 = variable36.Sizes;
            variable36 = variable36.LARGE;
            whisks['size'] = variable36;
            variable36 = 58;
            variable36 = variable40[variable36];
            variable36 = variable37.bind(tangon)(variable36);
            whisks['source'] = variable36;
            whisks = quebec.bind(tangon)(equals, whisks);
            papara['leading'] = whisks;
            quebec = _closure1_slot24;
            whisks = 28;
            whisks = variable40[whisks];
            whisks = variable39.bind(tangon)(whisks);
            equals = whisks.Text;
            whisks = {'variant': 'text-md/semibold', 'color': 'interactive-normal'};
            variable36 = 24;
            variable37 = variable40[variable36];
            variable37 = variable39.bind(tangon)(variable37);
            variable38 = variable37.intl;
            variable37 = variable38.string;
            variable36 = variable40[variable36];
            variable36 = variable39.bind(tangon)(variable36);
            variable36 = variable36.t;
            variable36 = variable36.nZfHsb;
            variable36 = variable37.bind(variable38)(variable36);
            whisks['children'] = variable36;
            whisks = quebec.bind(tangon)(equals, whisks);
            papara['label'] = whisks;
            vacuum = limora.bind(tangon)(sierra, papara);
 1692:
            ctrled[1] = vacuum;
            yankee['children'] = ctrled;
            offset = source.bind(tangon)(romeon, yankee);
 1706:
            golfie['children'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            report[1] = golfie;
            verify = _closure1_slot24;
            option = _closure1_slot6;
            golfie = {};
            offset = result.container;
            golfie['style'] = offset;
            romeon = _closure1_slot24;
            yankee = _closure1_slot1;
            source = _closure1_slot3;
            offset = 59;
            offset = source[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            offset['ref'] = update;
            update = null;
            if(backup) { _fun00010_ip = 1837; continue _fun00009 }
 1774:
            vacuum = _closure1_slot25;
            ctrled = _closure1_slot26;
            source = {};
            papara = null;
            if(status) { _fun00010_ip = 1793; continue _fun00009 }
 1789:
            papara = sequen.bind(tangon)();
 1793:
            sequen = new Array(3);
            sequen[0] = papara;
            papara = null;
            if(status) { _fun00010_ip = 1810; continue _fun00009 }
 1806:
            papara = target.bind(tangon)();
 1810:
            sequen[1] = papara;
            config = null;
            if(!cntext) { _fun00010_ip = 1823; continue _fun00009 }
 1819:
            config = record.bind(tangon)();
 1823:
            sequen[2] = config;
            source['children'] = sequen;
            update = vacuum.bind(tangon)(ctrled, source);
 1837:
            offset['header'] = update;
            update = result.container;
            offset['wrapperStyles'] = update;
            update = result.scrollContainer;
            result = new Array(2);
            result[0] = update;
            result[1] = echoed;
            offset['contentContainerStyle'] = result;
            offset['data'] = output;
            offset['rowHasChanged'] = sizing;
            offset['onRowMoved'] = kiloes;
            backup = !backup;
            offset['disableSorting'] = backup;
            offset['renderRow'] = foxtra;
            foxtra = 'handled';
            offset['keyboardShouldPersistTaps'] = foxtra;
            foxtra = 16;
            offset['scrollEventThrottle'] = foxtra;
            foxtra = true;
            offset['scrollEnabled'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            golfie['children'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            report[2] = golfie;
            option = _closure1_slot24;
            golfie = _closure1_slot0;
            verify = _closure1_slot3;
            oscard = 60;
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
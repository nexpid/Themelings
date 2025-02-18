// app/modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    oscard = argBaz;
    verify = argCor;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = verify;
    var _closure1_slot3 = option;
    tangon = function(argFoo) { // Original name: RoleIcon
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            offset = entity.role;
            report = {};
            verify = null;
            if(!(verify != offset)) { _fun00002_ip = 47; continue _fun00001 }
 17:
            entity = {};
            tangon = _closure1_slot11;
            zuuluu = {};
            zuuluu['role'] = offset;
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            entity['backgroundColor'] = michal;
            report = entity;
 47:
            tangon = _closure1_slot9;
            michal = _closure1_slot1;
            yankee = _closure1_slot3;
            entity = 7;
            entity = yankee[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            option = _closure1_slot9;
            golfie = _closure1_slot0;
            oscard = 8;
            oscard = yankee[oscard];
            oscard = golfie.bind(zuuluu)(oscard);
            golfie = oscard.ShieldUserIcon;
            oscard = {};
            yankee = 'sm';
            oscard['size'] = yankee;
            offset = verify != offset;
            verify = 'interactive-normal';
            if(!offset) { _fun00002_ip = 131; continue _fun00001 }
 127:
            verify = 'white';
 131:
            oscard['color'] = verify;
            oscard = option.bind(zuuluu)(golfie, oscard);
            entity['icon'] = oscard;
            entity['wrapperStyle'] = report;
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, michal);
    entity = 0;
    michal = option[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 1;
    michal = option[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 2;
    michal = option[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 3;
    michal = option[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 4;
    michal = option[michal];
    michal = golfie.bind(entity)(michal);
    michal = michal.DEFAULT_ROLE_COLOR;
    var _closure1_slot8 = michal;
    michal = 5;
    oscard = option[michal];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.jsx;
    var _closure1_slot9 = oscard;
    michal = option[michal];
    michal = golfie.bind(entity)(michal);
    michal = michal.jsxs;
    var _closure1_slot10 = michal;
    michal = function(argFoo) { // Original name: getRoleColor
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.role;
            zuuluu = michal.colorString;
            entity = null;
            if(!(entity == zuuluu)) { _fun00004_ip = 63; continue _fun00003 }
 21:
            report = _closure1_slot0;
            tangon = _closure1_slot3;
            zuuluu = 6;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            zuuluu = tangon.int2hex;
            entity = _closure1_slot8;
            entity = zuuluu.bind(tangon)(entity);
            _fun00004_ip = 69; continue _fun00003;
 63:
            entity = michal.colorString;
 69:
            return entity;
        }
    };
    var _closure1_slot11 = michal;
    michal = function(argFoo) { // Original name: RoleRow
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            entity = report.guildRole;
            var _closure2_slot0 = entity;
            backup = report.guildId;
            var _closure2_slot1 = backup;
            offset = null;
            tangon = Object.create(offset);
            zuuluu = 0;
            tangon['guildRole'] = zuuluu;
            tangon['guildId'] = zuuluu;
            result = {};
            output = report;
            sizing = tangon;
            oscard = copyDataProperties(result, output, sizing);
            foxtra = _closure1_slot0;
            golfie = _closure1_slot3;
            zuuluu = 9;
            zuuluu = golfie[zuuluu];
            report = undefined;
            verify = foxtra.bind(report)(zuuluu);
            option = verify.useStateFromStores;
            zuuluu = _closure1_slot6;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = _closure1_slot6;
                    zuuluu = tangon.getRoleMemberCount;
                    entity = _closure2_slot1;
                    zuuluu = zuuluu.bind(tangon)(entity);
                    entity = null;
                    tangon = entity == zuuluu;
                    entity = undefined;
                    if(tangon) { _fun00008_ip = 49; continue _fun00007 }
 36:
                    michal = _closure2_slot0;
                    michal = michal.id;
                    entity = zuuluu[michal];
 49:
                    return entity;
                }
            };
            romeon = option.bind(verify)(tangon, zuuluu);
            zuuluu = 10;
            zuuluu = golfie[zuuluu];
            option = foxtra.bind(report)(zuuluu);
            tangon = option.isEveryoneRoleId;
            zuuluu = entity.id;
            verify = tangon.bind(option)(backup, zuuluu);
            option = _closure1_slot5;
            tangon = option.useEffect;
            zuuluu = new Array(1);
            zuuluu[0] = backup;
            michal = function() {
                zuuluu = _closure1_slot2;
                michal = _closure1_slot3;
                entity = 11;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.fetchMemberCounts;
                michal = _closure2_slot1;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = tangon.bind(option)(michal, zuuluu);
            tangon = _closure1_slot9;
            michal = 12;
            michal = golfie[michal];
            michal = foxtra.bind(report)(michal);
            zuuluu = michal.TableRow;
            michal = {};
            backup = _closure1_slot9;
            option = 13;
            golfie = golfie[option];
            golfie = foxtra.bind(report)(golfie);
            foxtra = golfie.Text;
            golfie = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            kiloes = entity.name;
            golfie['children'] = kiloes;
            golfie = backup.bind(report)(foxtra, golfie);
            michal['label'] = golfie;
            backup = _closure1_slot9;
            foxtra = _closure1_slot13;
            golfie = {};
            golfie['role'] = entity;
            golfie = backup.bind(report)(foxtra, golfie);
            michal['icon'] = golfie;
            golfie = null;
            if(verify) { _fun00006_ip = 395; continue _fun00005 }
 274:
            verify = offset == romeon;
            golfie = null;
            if(verify) { _fun00006_ip = 395; continue _fun00005 }
 283:
            offset = _closure1_slot10;
            foxtra = _closure1_slot0;
            kiloes = _closure1_slot3;
            option = kiloes[option];
            option = foxtra.bind(report)(option);
            verify = option.Text;
            option = {'variant': 'text-sm/normal', 'color': 'text-muted'};
            backup = _closure1_slot9;
            yankee = 14;
            yankee = kiloes[yankee];
            yankee = foxtra.bind(report)(yankee);
            foxtra = yankee.GroupIcon;
            yankee = {'size': 'xxs', 'color': 'text-muted'};
            foxtra = backup.bind(report)(foxtra, yankee);
            yankee = new Array(3);
            yankee[0] = foxtra;
            foxtra = ' ';
            yankee[1] = foxtra;
            yankee[2] = romeon;
            option['children'] = yankee;
            golfie = offset.bind(report)(verify, option);
 395:
            michal['trailing'] = golfie;
            result = michal;
            output = oscard;
            oscard = copyDataProperties(result, output);
            entity = entity.id;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            return entity;
        }
    };
    var _closure1_slot12 = michal;
    oscard = 19;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx';
    oscard = golfie.bind(option)(oscard);
    report = function(argFoo) { // Original name: AppLauncherRoleListActionSheet
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            entity = michal.onRolePress;
            var _closure2_slot0 = entity;
            offset = michal.onActionSheetDismiss;
            var _closure2_slot1 = offset;
            entity = michal.channel;
            backup = michal.option;
            entity = entity.guild_id;
            var _closure2_slot2 = entity;
            oscard = _closure1_slot5;
            michal = oscard.useState;
            entity = '';
            zuuluu = michal.bind(oscard)(entity);
            michal = _closure1_slot4;
            tangon = undefined;
            entity = 2;
            zuuluu = michal.bind(tangon)(zuuluu, entity);
            option = 0;
            entity = zuuluu[option];
            var _closure2_slot3 = entity;
            michal = 1;
            michal = zuuluu[michal];
            var _closure2_slot4 = michal;
            zuuluu = oscard.useRef;
            michal = null;
            foxtra = zuuluu.bind(oscard)(michal);
            var _closure2_slot5 = foxtra;
            verify = _closure1_slot0;
            report = _closure1_slot3;
            michal = 9;
            michal = report[michal];
            kiloes = verify.bind(tangon)(michal);
            romeon = kiloes.useStateFromStores;
            michal = _closure1_slot7;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getRoles;
                entity = _closure2_slot2;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = romeon.bind(kiloes)(zuuluu, michal);
            var _closure2_slot6 = romeon;
            zuuluu = oscard.useMemo;
            michal = new Array(2);
            michal[0] = romeon;
            michal[1] = entity;
            entity = function() {
                entity = global;
                zuuluu = entity.Object;
                michal = zuuluu.values;
                entity = _closure2_slot6;
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        michal = argFoo;
                        tangon = _closure2_slot3;
                        entity = michal.id;
                        entity = tangon === entity;
                        if(entity) { _fun00012_ip = 82; continue _fun00011 }
 22:
                        oscard = _closure1_slot1;
                        report = _closure1_slot3;
                        tangon = 15;
                        tangon = report[tangon];
                        report = undefined;
                        tangon = oscard.bind(report)(tangon);
                        oscard = _closure2_slot3;
                        zuuluu = oscard.trim;
                        zuuluu = zuuluu.bind(oscard)();
                        oscard = michal.name;
                        michal = oscard.toLowerCase;
                        michal = michal.bind(oscard)();
                        entity = tangon.bind(report)(zuuluu, michal);
 82:
                        return entity;
                    }
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = zuuluu.bind(oscard)(entity, michal);
            var _closure2_slot7 = romeon;
            oscard = romeon.length;
            entity = function(argFoo) { // Original name: handleRolePress
                entity = argFoo;
                entity = entity.role;
                tangon = _closure2_slot0;
                zuuluu = {};
                zuuluu['role'] = entity;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = _closure1_slot1;
                report = _closure1_slot3;
                zuuluu = 16;
                zuuluu = report[zuuluu];
                report = tangon.bind(entity)(zuuluu);
                tangon = report.hideActionSheet;
                zuuluu = 'AppLauncherRoleListActionSheet';
                zuuluu = tangon.bind(report)(zuuluu);
                michal = _closure2_slot1;
                michal = michal.bind(entity)();
                return entity;
            };
            var _closure2_slot8 = entity;
            zuuluu = _closure1_slot10;
            entity = 17;
            entity = report[entity];
            entity = verify.bind(tangon)(entity);
            michal = entity.AppLauncherCommandOptionActionSheet;
            entity = {};
            entity['option'] = backup;
            entity['onDismiss'] = offset;
            backup = _closure1_slot9;
            offset = 18;
            report = report[offset];
            report = verify.bind(tangon)(report);
            verify = report.AppLauncherListSearchBar;
            report = {};
            kiloes = function(argFoo) { // Original name: onChange
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure2_slot4;
                    entity = zuuluu.toLowerCase;
                    zuuluu = entity.bind(zuuluu)();
                    entity = undefined;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    michal = _closure2_slot5;
                    tangon = michal.current;
                    michal = null;
                    if(!(michal != tangon)) { _fun00014_ip = 63; continue _fun00013 }
 42:
                    zuuluu = tangon.scrollToOffset;
                    michal = {'offset': 0, 'animated': false};
                    michal = zuuluu.bind(tangon)(michal);
 63:
                    return entity;
                }
            };
            report['onChange'] = kiloes;
            verify = backup.bind(tangon)(verify, report);
            report = new Array(2);
            report[0] = verify;
            if(!(option !== oscard)) { _fun00010_ip = 367; continue _fun00009 }
 310:
            verify = _closure1_slot9;
            option = _closure1_slot0;
            oscard = _closure1_slot3;
            oscard = oscard[offset];
            oscard = option.bind(tangon)(oscard);
            option = oscard.AppLauncherList;
            oscard = {};
            oscard['ref'] = foxtra;
            oscard['data'] = romeon;
            yankee = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                golfie = entity.item;
                var _closure3_slot0 = golfie;
                report = entity.index;
                tangon = _closure1_slot9;
                zuuluu = _closure1_slot12;
                michal = {};
                option = _closure2_slot2;
                michal['guildId'] = option;
                michal['guildRole'] = golfie;
                oscard = function() { // Original name: onPress
                    zuuluu = _closure2_slot8;
                    michal = {};
                    entity = _closure3_slot0;
                    michal['role'] = entity;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal['onPress'] = oscard;
                oscard = 0;
                oscard = oscard === report;
                michal['start'] = oscard;
                entity = _closure2_slot7;
                oscard = entity.length;
                entity = 1;
                entity = oscard - entity;
                entity = report === entity;
                michal['end'] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            oscard['renderItem'] = yankee;
            oscard = verify.bind(tangon)(option, oscard);
            _fun00010_ip = 402; continue _fun00009;
 367:
            verify = _closure1_slot9;
            option = _closure1_slot0;
            golfie = _closure1_slot3;
            golfie = golfie[offset];
            golfie = option.bind(tangon)(golfie);
            option = golfie.AppLauncherListEmptyState;
            golfie = {};
            oscard = verify.bind(tangon)(option, golfie);
 402:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = report;
    report = 'AppLauncherRoleListActionSheet';
    zuuluu['APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY'] = report;
    zuuluu['RoleIcon'] = tangon;
    zuuluu['RoleRow'] = michal;
    return entity;
})();
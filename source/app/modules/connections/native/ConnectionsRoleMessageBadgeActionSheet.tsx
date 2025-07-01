// app/modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    backup = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: PopoutCheck
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            yankee = entity.connectionType;
            offset = entity.connectionMetadataField;
            zuuluu = entity.operator;
            verify = entity.value;
            option = entity.description;
            entity = _closure1_slot20;
            report = undefined;
            backup = entity.bind(report)();
            entity = null;
            if(!(entity == option)) { _fun00002_ip = 107; continue _fun00001 }
 50:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 15;
            michal = oscard[michal];
            oscard = tangon.bind(report)(michal);
            tangon = oscard.getConnectionsCheckText;
            michal = {};
            michal['connectionType'] = yankee;
            michal['connectionMetadataField'] = offset;
            michal['operator'] = zuuluu;
            michal['value'] = verify;
            offset = tangon.bind(oscard)(michal);
            _fun00002_ip = 356; continue _fun00001;
 107:
            michal = _closure1_slot13;
            michal = michal.LESS_THAN;
            if(!(michal !== zuuluu)) { _fun00002_ip = 251; continue _fun00001 }
 124:
            michal = _closure1_slot13;
            michal = michal.GREATER_THAN;
            offset = option;
            if(!(michal === zuuluu)) { _fun00002_ip = 356; continue _fun00001 }
 144:
            zuuluu = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 14;
            tangon = yankee[michal];
            tangon = zuuluu.bind(report)(tangon);
            oscard = tangon.intl;
            tangon = oscard.format;
            michal = yankee[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.t;
            zuuluu = michal.2p7dAw;
            michal = {};
            michal['description'] = option;
            yankee = global;
            kiloes = yankee.Math;
            foxtra = kiloes.max;
            yankee = yankee.Number;
            romeon = yankee.bind(report)(verify);
            yankee = 1;
            romeon = romeon + yankee;
            yankee = 0;
            yankee = foxtra.bind(kiloes)(yankee, romeon);
            michal['count'] = yankee;
            offset = tangon.bind(oscard)(zuuluu, michal);
            _fun00002_ip = 356; continue _fun00001;
 251:
            zuuluu = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 14;
            tangon = yankee[michal];
            tangon = zuuluu.bind(report)(tangon);
            oscard = tangon.intl;
            tangon = oscard.format;
            michal = yankee[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.t;
            zuuluu = michal.2p7dAw;
            michal = {};
            michal['description'] = option;
            option = global;
            romeon = option.Math;
            yankee = romeon.max;
            option = option.Number;
            verify = option.bind(report)(verify);
            option = 1;
            verify = verify - option;
            option = 0;
            option = yankee.bind(romeon)(option, verify);
            michal['count'] = option;
            offset = tangon.bind(oscard)(zuuluu, michal);
 356:
            michal = entity == offset;
            entity = null;
            if(michal) { _fun00002_ip = 542; continue _fun00001 }
 368:
            tangon = _closure1_slot18;
            zuuluu = _closure1_slot6;
            michal = {};
            oscard = backup.popoutCheck;
            michal['style'] = oscard;
            verify = _closure1_slot17;
            foxtra = _closure1_slot1;
            yankee = _closure1_slot2;
            romeon = 16;
            oscard = yankee[romeon];
            option = foxtra.bind(report)(oscard);
            oscard = {};
            backup = backup.popoutCheckIcon;
            oscard['style'] = backup;
            backup = 17;
            backup = yankee[backup];
            backup = foxtra.bind(report)(backup);
            oscard['source'] = backup;
            romeon = yankee[romeon];
            romeon = foxtra.bind(report)(romeon);
            romeon = romeon.Sizes;
            romeon = romeon.SMALL;
            oscard['size'] = romeon;
            option = verify.bind(report)(option, oscard);
            oscard = new Array(2);
            oscard[0] = option;
            verify = _closure1_slot17;
            option = _closure1_slot0;
            golfie = 18;
            golfie = yankee[golfie];
            golfie = option.bind(report)(golfie);
            option = golfie.Text;
            golfie = {'variant': 'text-xs/medium', 'color': 'header-primary'};
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 542:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    michal = function(argFoo) { // Original name: PopoutChecks
        entity = argFoo;
        option = entity.eligibilityStates;
        entity = entity.guildId;
        var _closure2_slot0 = entity;
        michal = _closure1_slot20;
        tangon = undefined;
        michal = michal.bind(tangon)();
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot1;
        oscard = _closure1_slot2;
        michal = 19;
        michal = oscard[michal];
        michal = zuuluu.bind(tangon)(michal);
        michal = michal.bind(tangon)();
        var _closure2_slot2 = michal;
        michal = 20;
        michal = oscard[michal];
        golfie = zuuluu.bind(tangon)(michal);
        zuuluu = golfie.groupBy;
        michal = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                tangon = entity.connection_type;
                zuuluu = entity.application_id;
                michal = null;
                report = michal != zuuluu;
                zuuluu = '';
                michal = zuuluu;
                if(!report) { _fun00004_ip = 59; continue _fun00003 }
 31:
                oscard = entity.application_id;
                entity = global;
                entity = entity.HermesInternal;
                report = entity.concat;
                entity = ':';
                michal = report.bind(entity)(oscard);
 59:
                entity = global;
                entity = entity.HermesInternal;
                entity = entity.concat;
                entity = entity.bind(zuuluu)(tangon, michal);
                return entity;
            }
        };
        golfie = zuuluu.bind(golfie)(option, michal);
        var _closure2_slot3 = golfie;
        michal = global;
        zuuluu = michal.Object;
        michal = zuuluu.keys;
        golfie = michal.bind(zuuluu)(golfie);
        zuuluu = golfie.length;
        michal = 1;
        michal = zuuluu - michal;
        var _closure2_slot4 = michal;
        zuuluu = _closure1_slot0;
        michal = 21;
        michal = oscard[michal];
        oscard = zuuluu.bind(tangon)(michal);
        zuuluu = oscard.useColorValue;
        michal = _closure1_slot15;
        michal = michal.GREEN_330;
        michal = zuuluu.bind(oscard)(michal);
        michal = michal.hex;
        var _closure2_slot5 = michal;
        zuuluu = _closure1_slot17;
        michal = _closure1_slot19;
        entity = {};
        oscard = golfie.map;
        report = function(argFoo, argBar) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                report = argFoo;
                entity = _closure2_slot3;
                zuuluu = entity[report];
                michal = zuuluu.filter;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = entity.operator;
                    entity = null;
                    entity = entity != michal;
                    return entity;
                };
                verify = michal.bind(zuuluu)(entity);
                michal = zuuluu.find;
                entity = function(argFoo) {
                    entity = argFoo;
                    michal = entity.application;
                    entity = null;
                    entity = entity != michal;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 22;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.get;
                echoed = michal.bind(zuuluu)(report);
                output = null;
                michal = output == entity;
                result = undefined;
                if(michal) { _fun00006_ip = 101; continue _fun00005 }
 96:
                result = entity.application;
 101:
                michal = output == result;
                entity = undefined;
                if(michal) { _fun00006_ip = 116; continue _fun00005 }
 110:
                entity = result.bot;
 116:
                entity = output != entity;
                ctrled = null;
                if(!entity) { _fun00006_ip = 155; continue _fun00005 }
 125:
                zuuluu = _closure1_slot7;
                status = result.bot;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                sierra = michal;
                entity = new sierra[zuuluu](status, target);
                ctrled = entity instanceof Object ? entity : michal;
 155:
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 15;
                entity = zuuluu[entity];
                entity = michal.bind(tangon)(entity);
                zuuluu = entity.officialApplicationIds;
                michal = zuuluu.includes;
                entity = output == result;
                oscard = undefined;
                if(entity) { _fun00006_ip = 200; continue _fun00005 }
 195:
                oscard = result.id;
 200:
                option = output != oscard;
                entity = '';
                if(!option) { _fun00006_ip = 214; continue _fun00005 }
 211:
                entity = oscard;
 214:
                entity = michal.bind(zuuluu)(entity);
                if(entity) { _fun00006_ip = 289; continue _fun00005 }
 222:
                entity = output != ctrled;
                romeon = undefined;
                if(!entity) { _fun00006_ip = 359; continue _fun00005 }
 234:
                zuuluu = _closure1_slot17;
                michal = _closure1_slot1;
                oscard = _closure1_slot2;
                entity = 24;
                entity = oscard[entity];
                michal = michal.bind(tangon)(entity);
                entity = {};
                oscard = _closure2_slot1;
                oscard = oscard.botTag;
                entity['style'] = oscard;
                oscard = false;
                entity['verified'] = oscard;
                romeon = zuuluu.bind(tangon)(michal, entity);
                _fun00006_ip = 359; continue _fun00005;
 289:
                zuuluu = _closure1_slot17;
                michal = _closure1_slot1;
                oscard = _closure1_slot2;
                entity = 23;
                entity = oscard[entity];
                michal = michal.bind(tangon)(entity);
                entity = {};
                oscard = _closure2_slot1;
                oscard = oscard.botTag;
                entity['style'] = oscard;
                oscard = _closure2_slot0;
                entity['guildId'] = oscard;
                oscard = _closure2_slot5;
                entity['roleColor'] = oscard;
                oscard = 16;
                entity['size'] = oscard;
                romeon = zuuluu.bind(tangon)(michal, entity);
 359:
                zuuluu = _closure1_slot18;
                michal = _closure1_slot6;
                entity = {};
                oscard = _closure2_slot1;
                option = oscard.popoutChecksGroup;
                oscard = new Array(2);
                oscard[0] = option;
                offset = _closure2_slot4;
                option = argBar;
                offset = option < offset;
                option = null;
                if(!offset) { _fun00006_ip = 413; continue _fun00005 }
 403:
                offset = _closure2_slot1;
                option = offset.popoutChecksGroupBottomMargin;
 413:
                oscard[1] = option;
                entity['style'] = oscard;
                offset = _closure1_slot18;
                option = _closure1_slot6;
                oscard = {};
                yankee = _closure2_slot1;
                yankee = yankee.popoutCheckGroupName;
                oscard['style'] = yankee;
                yankee = output != echoed;
                backup = null;
                if(!yankee) { _fun00006_ip = 623; continue _fun00005 }
 457:
                sizing = _closure1_slot17;
                kiloes = _closure1_slot1;
                cntext = _closure1_slot2;
                vacuum = 16;
                yankee = cntext[vacuum];
                kiloes = kiloes.bind(tangon)(yankee);
                yankee = {};
                update = _closure2_slot1;
                update = update.popoutCheckGroupPlatformIcon;
                yankee['style'] = update;
                record = _closure1_slot0;
                update = 25;
                update = cntext[update];
                config = record.bind(tangon)(update);
                source = config.makeSource;
                update = 26;
                update = cntext[update];
                cntext = record.bind(tangon)(update);
                record = cntext.isThemeDark;
                update = _closure2_slot2;
                update = record.bind(cntext)(update);
                record = echoed.icon;
                if(update) { _fun00006_ip = 562; continue _fun00005 }
 554:
                update = record.lightPNG;
                _fun00006_ip = 568; continue _fun00005;
 562:
                update = record.darkPNG;
 568:
                update = source.bind(config)(update);
                yankee['source'] = update;
                update = true;
                yankee['disableColor'] = update;
                source = _closure1_slot1;
                update = _closure1_slot2;
                update = update[vacuum];
                update = source.bind(tangon)(update);
                update = update.Sizes;
                update = update.MEDIUM;
                yankee['size'] = update;
                backup = sizing.bind(tangon)(kiloes, yankee);
 623:
                yankee = new Array(4);
                yankee[0] = backup;
                kiloes = output != ctrled;
                backup = null;
                if(!kiloes) { _fun00006_ip = 723; continue _fun00005 }
 640:
                update = _closure1_slot17;
                sizing = _closure1_slot1;
                vacuum = _closure1_slot2;
                source = 27;
                kiloes = vacuum[source];
                sizing = sizing.bind(tangon)(kiloes);
                kiloes = {};
                sequen = _closure2_slot1;
                sequen = sequen.popoutCheckGroupPlatformIcon;
                kiloes['style'] = sequen;
                kiloes['user'] = ctrled;
                ctrled = _closure1_slot0;
                source = vacuum[source];
                source = ctrled.bind(tangon)(source);
                source = source.AvatarSizes;
                source = source.XSMALL;
                kiloes['size'] = source;
                kiloes['guildId'] = tangon;
                backup = update.bind(tangon)(sizing, kiloes);
 723:
                yankee[1] = backup;
                kiloes = _closure1_slot17;
                backup = _closure1_slot0;
                sizing = _closure1_slot2;
                foxtra = 18;
                foxtra = sizing[foxtra];
                foxtra = backup.bind(tangon)(foxtra);
                backup = foxtra.Text;
                foxtra = {'variant': 'text-sm/medium', 'color': 'interactive-active'};
                update = output == echoed;
                sizing = undefined;
                if(update) { _fun00006_ip = 784; continue _fun00005 }
 779:
                sizing = echoed.name;
 784:
                if(!(output == sizing)) { _fun00006_ip = 805; continue _fun00005 }
 788:
                echoed = output == result;
                output = undefined;
                if(echoed) { _fun00006_ip = 802; continue _fun00005 }
 797:
                output = result.name;
 802:
                sizing = output;
 805:
                foxtra['children'] = sizing;
                foxtra = kiloes.bind(tangon)(backup, foxtra);
                yankee[2] = foxtra;
                yankee[3] = romeon;
                oscard['children'] = yankee;
                option = offset.bind(tangon)(option, oscard);
                oscard = new Array(2);
                oscard[0] = option;
                option = verify.map;
                golfie = function(argFoo) {
                    entity = argFoo;
                    yankee = entity.connection_type;
                    offset = entity.connection_metadata_field;
                    verify = entity.operator;
                    option = entity.value;
                    entity = entity.description;
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 28;
                    zuuluu = golfie[tangon];
                    report = undefined;
                    backup = oscard.bind(report)(zuuluu);
                    zuuluu = null;
                    foxtra = zuuluu != offset;
                    romeon = 'connectionMetadataField is null';
                    romeon = backup.bind(report)(foxtra, romeon);
                    romeon = golfie[tangon];
                    backup = oscard.bind(report)(romeon);
                    foxtra = zuuluu != verify;
                    romeon = 'operator is null';
                    romeon = backup.bind(report)(foxtra, romeon);
                    tangon = golfie[tangon];
                    oscard = oscard.bind(report)(tangon);
                    tangon = zuuluu != option;
                    zuuluu = 'value is null';
                    zuuluu = oscard.bind(report)(tangon, zuuluu);
                    tangon = _closure1_slot17;
                    zuuluu = _closure1_slot21;
                    michal = {};
                    michal['connectionType'] = yankee;
                    michal['connectionMetadataField'] = offset;
                    michal['operator'] = verify;
                    michal['value'] = option;
                    michal['description'] = entity;
                    entity = global;
                    entity = entity.HermesInternal;
                    golfie = entity.concat;
                    ctrled = '';
                    entity = ':';
                    source = yankee;
                    update = entity;
                    echoed = offset;
                    result = entity;
                    output = verify;
                    sizing = entity;
                    kiloes = option;
                    entity = ctrled[golfie](source, update, echoed, result, output, sizing, kiloes, backup);
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    return entity;
                };
                golfie = option.bind(verify)(golfie);
                oscard[1] = golfie;
                entity['children'] = oscard;
                entity = zuuluu.bind(tangon)(michal, entity, report);
                return entity;
            }
        };
        report = oscard.bind(golfie)(report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot22 = michal;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = backup.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    option = golfie[report];
    report = argCor;
    report = report.bind(entity)(option);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.ActivityIndicator;
    var _closure1_slot5 = option;
    report = report.View;
    var _closure1_slot6 = report;
    report = 3;
    report = golfie[report];
    report = backup.bind(entity)(report);
    var _closure1_slot7 = report;
    yankee = 4;
    report = golfie[yankee];
    report = backup.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = golfie[report];
    report = backup.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 6;
    report = golfie[report];
    report = backup.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 7;
    report = golfie[report];
    report = backup.bind(entity)(report);
    var _closure1_slot11 = report;
    romeon = 8;
    report = golfie[romeon];
    report = backup.bind(entity)(report);
    var _closure1_slot12 = report;
    report = 9;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.OperatorTypes;
    var _closure1_slot13 = report;
    report = 10;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.AnalyticEvents;
    var _closure1_slot14 = option;
    option = report.Color;
    var _closure1_slot15 = option;
    report = report.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot16 = report;
    report = 11;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.jsx;
    var _closure1_slot17 = option;
    option = report.jsxs;
    var _closure1_slot18 = option;
    report = report.Fragment;
    var _closure1_slot19 = report;
    report = 12;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.createStyles;
    report = {};
    offset = {'flexDirection': 'column', 'alignItems': 'center', 'padding': 16};
    report['container'] = offset;
    offset = {'width': '100%', 'flexDirection': 'row', 'alignItems': 'center', 'paddingBottom': 16, 'borderBottomWidth': 1};
    foxtra = 13;
    kiloes = golfie[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.BACKGROUND_MODIFIER_ACCENT;
    offset['borderBottomColor'] = kiloes;
    kiloes = golfie[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.spacing;
    kiloes = kiloes.PX_24;
    offset['marginBottom'] = kiloes;
    report['header'] = offset;
    offset = {'marginRight': 8, 'height': 24, 'width': 24};
    report['verifiedContainer'] = offset;
    offset = {'flexShrink': 1, 'flexDirection': 'column'};
    report['headerTextContainer'] = offset;
    offset = {'position': 'absolute', 'left': 0, 'top': 0};
    report['verifiedCheck'] = offset;
    offset = {};
    kiloes = 40;
    offset['marginVertical'] = kiloes;
    report['loadingSpinner'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 8, 'marginLeft': 32, 'paddingRight': 20};
    report['popoutCheck'] = offset;
    offset = {};
    offset['marginRight'] = romeon;
    kiloes = golfie[foxtra];
    kiloes = backup.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.TEXT_POSITIVE;
    offset['tintColor'] = kiloes;
    report['popoutCheckIcon'] = offset;
    offset = {'width': '100%', 'marginBottom': 24};
    report['popoutChecksGroup'] = offset;
    offset = {'paddingBottom': 12, 'borderBottomWidth': 1, 'borderBottomColor': null, 'marginBottom': 12};
    foxtra = golfie[foxtra];
    foxtra = backup.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_MODIFIER_ACCENT;
    offset['borderBottomColor'] = foxtra;
    report['popoutChecksGroupBottomMargin'] = offset;
    offset = {'flexDirection': 'row', 'alignItems': 'center'};
    report['popoutCheckGroupName'] = offset;
    offset = {};
    offset['marginRight'] = romeon;
    report['popoutCheckGroupPlatformIcon'] = offset;
    offset = {};
    offset['marginBottom'] = romeon;
    report['button'] = offset;
    offset = {};
    offset['marginLeft'] = yankee;
    report['botTag'] = offset;
    report = option.bind(verify)(report);
    var _closure1_slot20 = report;
    report = 41;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/connections/native/ConnectionsRoleMessageBadgeActionSheet.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: ConnectionsRoleMessageBadgeActionSheet
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            foxtra = entity.userId;
            var _closure2_slot0 = foxtra;
            yankee = entity.roleId;
            var _closure2_slot1 = yankee;
            golfie = entity.channelId;
            var _closure2_slot2 = golfie;
            ctrled = entity.guildId;
            var _closure2_slot3 = ctrled;
            entity = _closure1_slot20;
            tangon = undefined;
            record = entity.bind(tangon)();
            oscard = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 29;
            zuuluu = michal[entity];
            report = oscard.bind(tangon)(zuuluu);
            zuuluu = 30;
            zuuluu = michal[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.CONNECTIONS_ROLE_POPOUT;
            zuuluu = report.bind(tangon)(zuuluu);
            report = zuuluu.analyticsLocations;
            var _closure2_slot4 = report;
            zuuluu = _closure1_slot0;
            option = 31;
            oscard = michal[option];
            romeon = zuuluu.bind(tangon)(oscard);
            offset = romeon.useStateFromStores;
            oscard = _closure1_slot11;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot11;
                michal = zuuluu.getGuild;
                entity = _closure2_slot3;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            target = offset.bind(romeon)(verify, oscard);
            var _closure2_slot5 = target;
            oscard = michal[option];
            romeon = zuuluu.bind(tangon)(oscard);
            offset = romeon.useStateFromStores;
            oscard = _closure1_slot8;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = function() {
                michal = _closure1_slot8;
                entity = michal.getId;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = offset.bind(romeon)(verify, oscard);
            var _closure2_slot6 = oscard;
            oscard = michal[option];
            romeon = zuuluu.bind(tangon)(oscard);
            offset = romeon.useStateFromStores;
            oscard = _closure1_slot9;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = function() {
                tangon = _closure1_slot9;
                zuuluu = tangon.getMember;
                michal = _closure2_slot3;
                entity = _closure2_slot6;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            verify = offset.bind(romeon)(verify, oscard);
            michal = michal[option];
            offset = zuuluu.bind(tangon)(michal);
            oscard = offset.useStateFromStores;
            michal = _closure1_slot12;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot12;
                michal = zuuluu.getGuildRoleConnectionEligibility;
                entity = _closure2_slot1;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            cntext = oscard.bind(offset)(zuuluu, michal);
            var _closure2_slot7 = cntext;
            oscard = _closure1_slot4;
            zuuluu = oscard.useState;
            output = null;
            michal = output == cntext;
            oscard = zuuluu.bind(oscard)(michal);
            zuuluu = _closure1_slot3;
            michal = 2;
            offset = zuuluu.bind(tangon)(oscard, michal);
            michal = 0;
            oscard = offset[michal];
            var _closure2_slot8 = oscard;
            zuuluu = 1;
            offset = offset[zuuluu];
            var _closure2_slot9 = offset;
            offset = output == verify;
            update = undefined;
            if(offset) { _fun00008_ip = 362; continue _fun00007 }
 346:
            offset = verify.roles;
            verify = offset.includes;
            update = verify.bind(offset)(yankee);
 362:
            offset = _closure1_slot4;
            romeon = offset.useEffect;
            verify = new Array(4);
            verify[0] = foxtra;
            verify[1] = yankee;
            verify[2] = golfie;
            verify[3] = ctrled;
            golfie = function() {
                zuuluu = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 32;
                michal = verify[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.track;
                michal = _closure1_slot14;
                zuuluu = michal.PASSPORT_ROLE_POPOUT_VIEWED;
                michal = {};
                option = _closure2_slot0;
                michal['other_user_id'] = option;
                option = _closure2_slot1;
                michal['role_id'] = option;
                option = _closure1_slot0;
                golfie = 33;
                offset = verify[golfie];
                romeon = option.bind(entity)(offset);
                yankee = romeon.collectChannelAnalyticsMetadataFromId;
                offset = _closure2_slot2;
                foxtra = yankee.bind(romeon)(offset);
                backup = michal;
                offset = copyDataProperties(backup, foxtra);
                golfie = verify[golfie];
                option = option.bind(entity)(golfie);
                golfie = option.collectGuildAnalyticsMetadata;
                oscard = _closure2_slot3;
                foxtra = golfie.bind(option)(oscard);
                backup = michal;
                oscard = copyDataProperties(backup, foxtra);
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            golfie = romeon.bind(offset)(golfie, verify);
            verify = offset.useEffect;
            golfie = new Array(4);
            golfie[0] = ctrled;
            golfie[1] = yankee;
            golfie[2] = oscard;
            golfie[3] = cntext;
            oscard = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot8;
                    if(!michal) { _fun00010_ip = 20; continue _fun00009 }
 10:
                    tangon = _closure2_slot7;
                    zuuluu = null;
                    michal = zuuluu == tangon;
 20:
                    if(!michal) { _fun00010_ip = 87; continue _fun00009 }
 23:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 34;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.fetchGuildRoleConnectionsEligibility;
                    michal = _closure2_slot3;
                    entity = _closure2_slot1;
                    zuuluu = zuuluu.bind(tangon)(michal, entity);
                    michal = zuuluu.then;
                    entity = function() {
                        zuuluu = _closure2_slot9;
                        michal = undefined;
                        entity = false;
                        entity = zuuluu.bind(michal)(entity);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
 87:
                    entity = undefined;
                    return entity;
                }
            };
            oscard = verify.bind(offset)(oscard, golfie);
            oscard = output == cntext;
            result = undefined;
            if(oscard) { _fun00008_ip = 479; continue _fun00007 }
 451:
            oscard = cntext.flat;
            verify = oscard.bind(cntext)();
            golfie = verify.some;
            oscard = function(argFoo) {
                entity = argFoo;
                michal = entity.application_id;
                entity = undefined;
                entity = entity === michal;
                return entity;
            };
            result = golfie.bind(verify)(oscard);
 479:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            verify = golfie.bind(tangon)(oscard);
            option = verify.useStateFromStores;
            oscard = _closure1_slot10;
            golfie = new Array(1);
            golfie[0] = oscard;
            oscard = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot5;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    entity = undefined;
                    if(!zuuluu) { _fun00012_ip = 50; continue _fun00011 }
 18:
                    report = _closure1_slot10;
                    tangon = report.getRole;
                    zuuluu = _closure2_slot5;
                    zuuluu = zuuluu.id;
                    michal = _closure2_slot1;
                    entity = tangon.bind(report)(zuuluu, michal);
 50:
                    return entity;
                }
            };
            limora = option.bind(verify)(golfie, oscard);
            if(!(output != cntext)) { _fun00008_ip = 691; continue _fun00007 }
 533:
            oscard = cntext.length;
            if(!(zuuluu === oscard)) { _fun00008_ip = 558; continue _fun00007 }
 542:
            michal = cntext[michal];
            michal = michal.length;
            if(!(zuuluu !== michal)) { _fun00008_ip = 691; continue _fun00007 }
 558:
            michal = cntext.length;
            if(!(zuuluu !== michal)) { _fun00008_ip = 629; continue _fun00007 }
 567:
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 14;
            oscard = option[michal];
            oscard = zuuluu.bind(tangon)(oscard);
            golfie = oscard.intl;
            oscard = golfie.format;
            michal = option[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.t;
            zuuluu = michal.D7uftL;
            michal = {};
            status = oscard.bind(golfie)(zuuluu, michal);
            _fun00008_ip = 689; continue _fun00007;
 629:
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 14;
            oscard = option[michal];
            oscard = zuuluu.bind(tangon)(oscard);
            golfie = oscard.intl;
            oscard = golfie.format;
            michal = option[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.t;
            zuuluu = michal.0eBj39;
            michal = {};
            status = oscard.bind(golfie)(zuuluu, michal);
 689:
            _fun00008_ip = 748; continue _fun00007;
 691:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 14;
            zuuluu = option[michal];
            zuuluu = golfie.bind(tangon)(zuuluu);
            oscard = zuuluu.intl;
            zuuluu = oscard.string;
            michal = option[michal];
            michal = golfie.bind(tangon)(michal);
            michal = michal.t;
            michal = michal.jDym4O;
            status = zuuluu.bind(oscard)(michal);
 748:
            zuuluu = _closure1_slot17;
            oscard = _closure1_slot0;
            papara = _closure1_slot2;
            entity = papara[entity];
            entity = oscard.bind(tangon)(entity);
            michal = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golfie = _closure1_slot17;
            report = 35;
            report = papara[report];
            report = oscard.bind(tangon)(report);
            oscard = report.BottomSheet;
            report = {};
            offset = _closure1_slot18;
            verify = _closure1_slot6;
            option = {};
            yankee = record.container;
            option['style'] = yankee;
            foxtra = _closure1_slot18;
            romeon = _closure1_slot6;
            yankee = {};
            backup = record.header;
            yankee['style'] = backup;
            sizing = _closure1_slot17;
            kiloes = _closure1_slot6;
            backup = {};
            echoed = record.verifiedContainer;
            backup['style'] = echoed;
            vacuum = _closure1_slot17;
            source = _closure1_slot1;
            echoed = 36;
            echoed = papara[echoed];
            source = source.bind(tangon)(echoed);
            echoed = {};
            papara = record.verifiedCheck;
            echoed['style'] = papara;
            sierra = output == target;
            papara = undefined;
            if(sierra) { _fun00008_ip = 909; continue _fun00007 }
 904:
            papara = target.id;
 909:
            if(!(output == papara)) { _fun00008_ip = 917; continue _fun00007 }
 913:
            papara = _closure1_slot16;
 917:
            echoed['guildId'] = papara;
            target = output != limora;
            papara = undefined;
            if(!target) { _fun00008_ip = 933; continue _fun00007 }
 930:
            papara = limora;
 933:
            echoed['role'] = papara;
            papara = 24;
            echoed['size'] = papara;
            echoed = vacuum.bind(tangon)(source, echoed);
            backup['children'] = echoed;
            kiloes = sizing.bind(tangon)(kiloes, backup);
            backup = new Array(2);
            backup[0] = kiloes;
            echoed = _closure1_slot18;
            sizing = _closure1_slot6;
            kiloes = {};
            source = record.headerTextContainer;
            kiloes['style'] = source;
            papara = _closure1_slot17;
            vacuum = _closure1_slot0;
            source = _closure1_slot2;
            sierra = 18;
            source = source[sierra];
            source = vacuum.bind(tangon)(source);
            vacuum = source.Text;
            source = {'variant': 'text-lg/semibold', 'color': 'header-primary'};
            whisks = output == limora;
            target = undefined;
            if(whisks) { _fun00008_ip = 1046; continue _fun00007 }
 1041:
            target = limora.name;
 1046:
            source['children'] = target;
            vacuum = papara.bind(tangon)(vacuum, source);
            source = new Array(2);
            source[0] = vacuum;
            target = _closure1_slot17;
            papara = _closure1_slot0;
            vacuum = _closure1_slot2;
            vacuum = vacuum[sierra];
            vacuum = papara.bind(tangon)(vacuum);
            papara = vacuum.Text;
            vacuum = {'variant': 'text-xs/normal', 'color': 'header-secondary'};
            vacuum['children'] = status;
            vacuum = target.bind(tangon)(papara, vacuum);
            source[1] = vacuum;
            kiloes['children'] = source;
            kiloes = echoed.bind(tangon)(sizing, kiloes);
            backup[1] = kiloes;
            yankee['children'] = backup;
            romeon = foxtra.bind(tangon)(romeon, yankee);
            yankee = new Array(2);
            yankee[0] = romeon;
            if(!(output != cntext)) { _fun00008_ip = 1168; continue _fun00007 }
 1154:
            romeon = cntext.flat;
            romeon = romeon.bind(cntext)();
            if(!(output == romeon)) { _fun00008_ip = 1207; continue _fun00007 }
 1168:
            backup = _closure1_slot17;
            foxtra = _closure1_slot5;
            romeon = {};
            kiloes = record.loadingSpinner;
            romeon['style'] = kiloes;
            kiloes = 'large';
            romeon['size'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            _fun00008_ip = 1564; continue _fun00007;
 1207:
            kiloes = _closure1_slot18;
            backup = _closure1_slot19;
            foxtra = {};
            source = _closure1_slot17;
            echoed = _closure1_slot22;
            sizing = {};
            vacuum = cntext.flat;
            vacuum = vacuum.bind(cntext)();
            sizing['eligibilityStates'] = vacuum;
            sizing['guildId'] = ctrled;
            echoed = source.bind(tangon)(echoed, sizing);
            sizing = new Array(3);
            sizing[0] = echoed;
            echoed = null;
            if(update) { _fun00008_ip = 1403; continue _fun00007 }
 1268:
            ctrled = _closure1_slot17;
            cntext = _closure1_slot1;
            papara = _closure1_slot2;
            vacuum = 37;
            update = papara[vacuum];
            source = cntext.bind(tangon)(update);
            update = {};
            target = record.button;
            update['style'] = target;
            target = function() { // Original name: onPress
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                entity = 38;
                zuuluu = tangon[entity];
                entity = undefined;
                oscard = report.bind(entity)(zuuluu);
                report = oscard.hideActionSheet;
                zuuluu = 'ConnectionsRoleMessageBadgeActionSheet';
                zuuluu = report.bind(oscard)(zuuluu);
                zuuluu = _closure1_slot0;
                michal = 39;
                michal = tangon[michal];
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.openGuildRoleConnectionsModal;
                michal = {};
                report = _closure2_slot3;
                michal['guildId'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            update['onPress'] = target;
            limora = _closure1_slot0;
            target = 14;
            status = papara[target];
            status = limora.bind(tangon)(status);
            sierra = status.intl;
            status = sierra.string;
            target = papara[target];
            target = limora.bind(tangon)(target);
            target = target.t;
            target = target.T1t1WV;
            target = status.bind(sierra)(target);
            update['text'] = target;
            vacuum = papara[vacuum];
            vacuum = cntext.bind(tangon)(vacuum);
            vacuum = vacuum.Colors;
            vacuum = vacuum.BRAND;
            update['color'] = vacuum;
            echoed = ctrled.bind(tangon)(source, update);
 1403:
            sizing[1] = echoed;
            output = null;
            if(!result) { _fun00008_ip = 1550; continue _fun00007 }
 1415:
            update = _closure1_slot17;
            ctrled = _closure1_slot1;
            vacuum = _closure1_slot2;
            source = 37;
            result = vacuum[source];
            echoed = ctrled.bind(tangon)(result);
            result = {};
            record = record.button;
            result['style'] = record;
            config = function() { // Original name: onPress
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 40;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = {};
                report = _closure2_slot0;
                michal['userId'] = report;
                report = _closure2_slot2;
                michal['channelId'] = report;
                report = _closure2_slot1;
                michal['roleId'] = report;
                tangon = _closure2_slot4;
                michal['sourceAnalyticsLocations'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            result['onPress'] = config;
            cntext = _closure1_slot0;
            sequen = 14;
            config = vacuum[sequen];
            config = cntext.bind(tangon)(config);
            record = config.intl;
            config = record.string;
            sequen = vacuum[sequen];
            sequen = cntext.bind(tangon)(sequen);
            sequen = sequen.t;
            sequen = sequen.hgKDnJ;
            sequen = config.bind(record)(sequen);
            result['text'] = sequen;
            source = vacuum[source];
            source = ctrled.bind(tangon)(source);
            source = source.Colors;
            source = source.GREY;
            result['color'] = source;
            output = update.bind(tangon)(echoed, result);
 1550:
            sizing[2] = output;
            foxtra['children'] = sizing;
            romeon = kiloes.bind(tangon)(backup, foxtra);
 1564:
            yankee[1] = romeon;
            option['children'] = yankee;
            option = offset.bind(tangon)(verify, option);
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['PopoutChecks'] = michal;
    return entity;
})();
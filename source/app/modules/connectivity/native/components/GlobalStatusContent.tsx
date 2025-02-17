// app/modules/connectivity/native/components/GlobalStatusContent.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: getRTCText
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            options = argFoo;
            mike = argBar;
            yankee = argGrault;
            zulu = null;
            if(!(zulu != options)) { _fun00002_ip = 315; continue _fun00001 }
 18:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 16;
            tango = oscar[tango];
            oscar = undefined;
            verify = report.bind(oscar)(tango);
            golf = verify.getStatus;
            report = argCorge;
            tango = argBaz;
            tango = golf.bind(verify)(report, tango);
            golf = tango.connectionStatus;
            report = tango.connectionStatusText;
            tango = 'connected';
            tango = tango === golf;
            if(!tango) { _fun00002_ip = 88; continue _fun00001 }
 84:
            tango = zulu != yankee;
 88:
            if(!tango) { _fun00002_ip = 155; continue _fun00001 }
 91:
            golf = _closure1_slot0;
            romeo = _closure1_slot2;
            tango = 17;
            verify = romeo[tango];
            verify = golf.bind(oscar)(verify);
            offset = verify.intl;
            verify = offset.formatToPlainString;
            tango = romeo[tango];
            tango = golf.bind(oscar)(tango);
            tango = tango.t;
            golf = tango.G+vAHx;
            tango = {};
            tango['username'] = yankee;
            report = verify.bind(offset)(golf, tango);
 155:
            if(!(zulu != mike)) { _fun00002_ip = 237; continue _fun00001 }
 159:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 18;
            zulu = golf[zulu];
            verify = tango.bind(oscar)(zulu);
            golf = verify.computeChannelName;
            tango = _closure1_slot10;
            zulu = _closure1_slot8;
            verify = golf.bind(verify)(options, tango, zulu);
            golf = mike.name;
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = '';
            mike = ' / ';
            tango = tango.bind(zulu)(verify, mike, golf);
            _fun00002_ip = 283; continue _fun00001;
 237:
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 18;
            mike = golf[mike];
            golf = zulu.bind(oscar)(mike);
            oscar = golf.computeChannelName;
            kilo = _closure1_slot10;
            backup = _closure1_slot8;
            foxtrot = true;
            output = golf;
            sizing = options;
            tango = output[oscar](sizing, kilo, backup, foxtrot, romeo);
 283:
            entity = global;
            entity = entity.HermesInternal;
            zulu = entity.concat;
            mike = '';
            entity = ': ';
            entity = zulu.bind(mike)(report, entity, tango);
            return entity;
 315:
            entity = '';
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: getConnectivityText
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            entity = _closure1_slot13;
            entity = entity.CONNECTING;
            if(!(tango !== entity)) { _fun00004_ip = 97; continue _fun00003 }
 20:
            entity = _closure1_slot13;
            zulu = entity.OFFLINE;
            entity = null;
            if(!(tango === zulu)) { _fun00004_ip = 95; continue _fun00003 }
 36:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.1BRkQ0;
            entity = tango.bind(report)(zulu);
 95:
            _fun00004_ip = 156; continue _fun00003;
 97:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 17;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.7LkwqK;
            entity = zulu.bind(tango)(mike);
 156:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo, argBar) { // Original name: getRTCIconSource
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = _closure1_slot1;
            tango = null;
            mike = argFoo;
            if(!(tango == mike)) { _fun00006_ip = 44; continue _fun00005 }
 16:
            report = _closure1_slot2;
            mike = argBar;
            if(mike) { _fun00006_ip = 35; continue _fun00005 }
 26:
            mike = 21;
            mike = report[mike];
            _fun00006_ip = 42; continue _fun00005;
 35:
            tango = 20;
            mike = report[tango];
 42:
            _fun00006_ip = 55; continue _fun00005;
 44:
            tango = _closure1_slot2;
            entity = 19;
            mike = tango[entity];
 55:
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo, argBar) { // Original name: getConnectivityIconSource
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = _closure1_slot13;
            tango = entity.OFFLINE;
            zulu = argFoo;
            entity = null;
            if(!(zulu === tango)) { _fun00008_ip = 59; continue _fun00007 }
 22:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = argBar;
            if(mike) { _fun00008_ip = 45; continue _fun00007 }
 36:
            mike = 23;
            zulu = report[mike];
            _fun00008_ip = 52; continue _fun00007;
 45:
            mike = 22;
            zulu = report[mike];
 52:
            mike = undefined;
            entity = tango.bind(mike)(zulu);
 59:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar) { // Original name: getIcon
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscar = argFoo;
            entity = argBar;
            kilo = entity.connectivityState;
            verify = entity.hasRTCConnectivity;
            backup = entity.streamerName;
            foxtrot = entity.hasVideo;
            romeo = entity.isDarkTheme;
            tango = entity.remotePlatform;
            entity = null;
            if(!(entity == tango)) { _fun00010_ip = 279; continue _fun00009 }
 51:
            if(verify) { _fun00010_ip = 110; continue _fun00009 }
 54:
            zulu = _closure1_slot13;
            zulu = zulu.CONNECTING;
            if(!(kilo === zulu)) { _fun00010_ip = 110; continue _fun00009 }
 71:
            golf = _closure1_slot15;
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 26;
            mike = report[mike];
            report = undefined;
            zulu = zulu.bind(report)(mike);
            mike = {};
            mike = golf.bind(report)(zulu, mike);
            _fun00010_ip = 277; continue _fun00009;
 110:
            options = _closure1_slot15;
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            output = 25;
            zulu = zulu[output];
            golf = undefined;
            report = report.bind(golf)(zulu);
            zulu = {};
            sizing = _closure1_slot1;
            offset = _closure1_slot2;
            offset = offset[output];
            offset = sizing.bind(golf)(offset);
            sizing = offset.Sizes;
            if(verify) { _fun00010_ip = 175; continue _fun00009 }
 167:
            offset = sizing.EXTRA_SMALL;
            _fun00010_ip = 181; continue _fun00009;
 175:
            offset = sizing.REFRESH_SMALL_16;
 181:
            zulu['size'] = offset;
            if(verify) { _fun00010_ip = 200; continue _fun00009 }
 188:
            offset = _closure1_slot22;
            offset = offset.bind(golf)(kilo, romeo);
            _fun00010_ip = 210; continue _fun00009;
 200:
            romeo = _closure1_slot21;
            offset = romeo.bind(golf)(backup, foxtrot);
 210:
            zulu['source'] = offset;
            offset = null;
            if(!verify) { _fun00010_ip = 250; continue _fun00009 }
 219:
            romeo = _closure1_slot1;
            foxtrot = _closure1_slot2;
            yankee = 15;
            yankee = foxtrot[yankee];
            yankee = romeo.bind(golf)(yankee);
            yankee = yankee.unsafe_rawColors;
            offset = yankee.WHITE_500;
 250:
            zulu['color'] = offset;
            offset = oscar.icon;
            zulu['style'] = offset;
            verify = !verify;
            zulu['disableColor'] = verify;
            mike = options.bind(golf)(report, zulu);
 277:
            return mike;
 279:
            golf = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 24;
            zulu = report[zulu];
            report = undefined;
            zulu = golf.bind(report)(zulu);
            golf = zulu.bind(report)(tango);
            zulu = entity != golf;
            entity = null;
            if(!zulu) { _fun00010_ip = 415; continue _fun00009 }
 318:
            tango = _closure1_slot15;
            options = _closure1_slot1;
            verify = _closure1_slot2;
            offset = 25;
            mike = verify[offset];
            zulu = options.bind(report)(mike);
            mike = {};
            offset = verify[offset];
            offset = options.bind(report)(offset);
            offset = offset.Sizes;
            offset = offset.REFRESH_SMALL_16;
            mike['size'] = offset;
            mike['source'] = golf;
            golf = 15;
            golf = verify[golf];
            golf = options.bind(report)(golf);
            golf = golf.unsafe_rawColors;
            golf = golf.WHITE_500;
            mike['color'] = golf;
            oscar = oscar.icon;
            mike['style'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 415:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: DefaultChannelStatus
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            kilo = mike.channel;
            var _closure2_slot0 = kilo;
            backup = mike.guild;
            verify = mike.hasRTCConnectivity;
            var _closure2_slot1 = verify;
            result = mike.isDarkTheme;
            options = mike.remotePlatform;
            foxtrot = mike.rtcConnectionState;
            mike = _closure1_slot18;
            tango = undefined;
            echo = mike.bind(tango)();
            golf = _closure1_slot0;
            output = _closure1_slot2;
            mike = 27;
            zulu = output[mike];
            yankee = golf.bind(tango)(zulu);
            oscar = yankee.useStateFromStores;
            zulu = _closure1_slot12;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                mike = _closure1_slot12;
                entity = mike.getState;
                entity = entity.bind(mike)();
                return entity;
            };
            sizing = oscar.bind(yankee)(report, zulu);
            zulu = output[mike];
            yankee = golf.bind(tango)(zulu);
            oscar = yankee.useStateFromStores;
            zulu = _closure1_slot10;
            report = new Array(2);
            report[0] = zulu;
            zulu = _closure1_slot4;
            report[1] = zulu;
            zulu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure1_slot4;
                    entity = zulu.getLastActiveStream;
                    entity = entity.bind(zulu)();
                    zulu = null;
                    if(!(zulu == entity)) { _fun00014_ip = 25; continue _fun00013 }
 23:
                    return zulu;
 25:
                    report = _closure1_slot10;
                    tango = report.getUser;
                    zulu = entity.ownerId;
                    report = tango.bind(report)(zulu);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 28;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.getName;
                    mike = entity.guildId;
                    entity = entity.channelId;
                    entity = zulu.bind(tango)(mike, entity, report);
                    return entity;
                }
            };
            romeo = oscar.bind(yankee)(report, zulu);
            mike = output[mike];
            report = golf.bind(tango)(mike);
            zulu = report.useStateFromStores;
            oscar = _closure1_slot11;
            mike = new Array(1);
            mike[0] = oscar;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot1;
                    if(!entity) { _fun00016_ip = 20; continue _fun00015 }
 10:
                    tango = _closure2_slot0;
                    zulu = null;
                    entity = zulu != tango;
 20:
                    if(!entity) { _fun00016_ip = 50; continue _fun00015 }
 23:
                    tango = _closure1_slot11;
                    zulu = tango.hasVideo;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = zulu.bind(tango)(mike);
 50:
                    return entity;
                }
            };
            yankee = zulu.bind(report)(mike, entity);
            zulu = _closure1_slot16;
            mike = _closure1_slot3;
            entity = {};
            report = echo.content;
            entity['style'] = report;
            oscar = _closure1_slot23;
            report = {};
            report['connectivityState'] = sizing;
            report['hasRTCConnectivity'] = verify;
            report['streamerName'] = romeo;
            report['hasVideo'] = yankee;
            report['isDarkTheme'] = result;
            report['remotePlatform'] = options;
            oscar = oscar.bind(tango)(echo, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot15;
            oscar = 29;
            oscar = output[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.LegacyText;
            oscar = {};
            result = echo.text;
            output = new Array(2);
            output[0] = result;
            if(verify) { _fun00012_ip = 313; continue _fun00011 }
 305:
            result = echo.textColorThemed;
            _fun00012_ip = 319; continue _fun00011;
 313:
            result = echo.textColor;
 319:
            output[1] = result;
            oscar['style'] = output;
            output = 1;
            oscar['numberOfLines'] = output;
            if(verify) { _fun00012_ip = 349; continue _fun00011 }
 338:
            verify = _closure1_slot20;
            verify = verify.bind(tango)(sizing);
            _fun00012_ip = 374; continue _fun00011;
 349:
            offset = _closure1_slot19;
            record = undefined;
            config = kilo;
            sequence = backup;
            vacuum = yankee;
            control = foxtrot;
            source = romeo;
            verify = record[offset](config, sequence, vacuum, control, source, update);
 374:
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot9 = tango;
    foxtrot = 8;
    tango = oscar[foxtrot];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 10;
    golf = oscar[tango];
    golf = yankee.bind(entity)(golf);
    var _closure1_slot12 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ConnectivityState;
    var _closure1_slot13 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    backup = tango.RTC_PANEL_HEIGHT;
    tango = 12;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RTCConnectionStates;
    var _closure1_slot14 = tango;
    tango = 13;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot15 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsxs;
    var _closure1_slot16 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot17 = tango;
    romeo = 14;
    tango = oscar[romeo];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    offset = 15;
    kilo = oscar[offset];
    kilo = yankee.bind(entity)(kilo);
    kilo = kilo.colors;
    kilo = kilo.BACKGROUND_TERTIARY;
    verify['backgroundColor'] = kilo;
    tango['bgNeutral'] = verify;
    verify = {};
    kilo = oscar[offset];
    kilo = yankee.bind(entity)(kilo);
    kilo = kilo.unsafe_rawColors;
    kilo = kilo.GREEN_360;
    verify['backgroundColor'] = kilo;
    tango['bg'] = verify;
    verify = {'paddingHorizontal': 16, 'minHeight': null, 'alignItems': 'center', 'justifyContent': 'center'};
    verify['minHeight'] = backup;
    tango['container'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center'};
    tango['content'] = verify;
    verify = {};
    verify['marginRight'] = foxtrot;
    tango['icon'] = verify;
    verify = {};
    verify['fontSize'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.WHITE;
    verify['color'] = romeo;
    tango['text'] = verify;
    verify = {};
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.WHITE;
    verify['color'] = romeo;
    tango['textColor'] = verify;
    verify = {};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.HEADER_PRIMARY;
    verify['color'] = offset;
    tango['textColorThemed'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot18 = tango;
    tango = 42;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/connectivity/native/components/GlobalStatusContent.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: _default
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            mike = _closure1_slot18;
            tango = undefined;
            backup = mike.bind(tango)();
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 30;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            golf = mike.bind(tango)();
            var _closure2_slot0 = golf;
            zulu = _closure1_slot0;
            mike = 27;
            mike = report[mike];
            oscar = zulu.bind(tango)(mike);
            report = oscar.useStateFromStoresObject;
            mike = _closure1_slot7;
            zulu = new Array(4);
            zulu[0] = mike;
            mike = _closure1_slot6;
            zulu[1] = mike;
            mike = _closure1_slot5;
            zulu[2] = mike;
            mike = _closure1_slot9;
            zulu[3] = mike;
            mike = new Array(1);
            mike[0] = golf;
            entity = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    golf = _closure1_slot5;
                    oscar = golf.getChannel;
                    entity = _closure2_slot0;
                    report = null;
                    options = report == entity;
                    entity = undefined;
                    if(options) { _fun00020_ip = 39; continue _fun00019 }
 30:
                    options = _closure2_slot0;
                    entity = options.channelId;
 39:
                    if(!(report == entity)) { _fun00020_ip = 57; continue _fun00019 }
 43:
                    verify = _closure1_slot7;
                    options = verify.getChannelId;
                    entity = options.bind(verify)();
 57:
                    oscar = oscar.bind(golf)(entity);
                    entity = _closure2_slot0;
                    if(!(report == entity)) { _fun00020_ip = 86; continue _fun00019 }
 70:
                    golf = _closure1_slot7;
                    entity = golf.getGuildId;
                    options = entity.bind(golf)();
                    _fun00020_ip = 108; continue _fun00019;
 86:
                    golf = report == oscar;
                    entity = undefined;
                    if(golf) { _fun00020_ip = 105; continue _fun00019 }
 95:
                    golf = oscar.getGuildId;
                    entity = golf.bind(oscar)();
 105:
                    options = entity;
 108:
                    golf = _closure1_slot6;
                    entity = golf.getGuild;
                    golf = entity.bind(golf)(options);
                    verify = _closure1_slot9;
                    options = verify.getSessionById;
                    entity = _closure2_slot0;
                    entity = report == entity;
                    offset = undefined;
                    if(entity) { _fun00020_ip = 155; continue _fun00019 }
 145:
                    entity = _closure2_slot0;
                    offset = entity.sessionId;
 155:
                    yankee = report != offset;
                    entity = '';
                    if(!yankee) { _fun00020_ip = 169; continue _fun00019 }
 166:
                    entity = offset;
 169:
                    entity = options.bind(verify)(entity);
                    options = report == entity;
                    mike = undefined;
                    if(options) { _fun00020_ip = 195; continue _fun00019 }
 183:
                    entity = entity.clientInfo;
                    mike = entity.os;
 195:
                    entity = {};
                    entity['guild'] = golf;
                    entity['channel'] = oscar;
                    zulu = _closure2_slot0;
                    if(!(report == zulu)) { _fun00020_ip = 229; continue _fun00019 }
 213:
                    report = _closure1_slot7;
                    zulu = report.getState;
                    zulu = zulu.bind(report)();
                    _fun00020_ip = 239; continue _fun00019;
 229:
                    tango = _closure1_slot14;
                    zulu = tango.RTC_CONNECTED;
 239:
                    entity['rtcConnectionState'] = zulu;
                    entity['remotePlatform'] = mike;
                    return entity;
                }
            };
            entity = report.bind(oscar)(zulu, entity, mike);
            oscar = entity.guild;
            golf = entity.channel;
            report = entity.rtcConnectionState;
            zulu = entity.remotePlatform;
            options = null;
            entity = options == golf;
            yankee = undefined;
            if(entity) { _fun00018_ip = 166; continue _fun00017 }
 156:
            entity = golf.isGuildStageVoice;
            yankee = entity.bind(golf)();
 166:
            mike = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 31;
            entity = verify[entity];
            mike = mike.bind(tango)(entity);
            verify = options == golf;
            entity = undefined;
            if(verify) { _fun00018_ip = 200; continue _fun00017 }
 195:
            entity = golf.id;
 200:
            entity = mike.bind(tango)(entity);
            romeo = _closure1_slot1;
            kilo = _closure1_slot2;
            mike = 32;
            mike = kilo[mike];
            mike = romeo.bind(tango)(mike);
            mike = mike.bind(tango)();
            verify = options != golf;
            foxtrot = {};
            foxtrot['channel'] = golf;
            foxtrot['guild'] = oscar;
            foxtrot['hasRTCConnectivity'] = verify;
            golf = _closure1_slot0;
            oscar = 33;
            oscar = kilo[oscar];
            options = golf.bind(tango)(oscar);
            golf = options.isThemeDark;
            oscar = 34;
            oscar = kilo[oscar];
            oscar = romeo.bind(tango)(oscar);
            oscar = oscar.bind(tango)();
            oscar = golf.bind(options)(oscar);
            foxtrot['isDarkTheme'] = oscar;
            foxtrot['rtcConnectionState'] = report;
            foxtrot['remotePlatform'] = zulu;
            if(!yankee) { _fun00018_ip = 318; continue _fun00017 }
 309:
            if(entity) { _fun00018_ip = 315; continue _fun00017 }
 312:
            entity = mike;
 315:
            verify = entity;
 318:
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 35;
            entity = zulu[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.useIsScreenLandscape;
            romeo = entity.bind(mike)();
            if(!romeo) { _fun00018_ip = 398; continue _fun00017 }
 351:
            mike = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 36;
            entity = oscar[entity];
            zulu = mike.bind(tango)(entity);
            mike = zulu.isModalOpen;
            report = _closure1_slot1;
            entity = 37;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            romeo = mike.bind(zulu)(entity);
 398:
            if(!romeo) { _fun00018_ip = 430; continue _fun00017 }
 401:
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 38;
            entity = zulu[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.isAndroid;
            romeo = entity.bind(mike)();
 430:
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 39;
            entity = zulu[entity];
            entity = mike.bind(tango)(entity);
            entity = entity.bind(tango)();
            sizing = entity.top;
            zulu = _closure1_slot15;
            mike = _closure1_slot17;
            entity = {};
            report = {};
            options = _closure1_slot16;
            golf = _closure1_slot3;
            oscar = {};
            if(verify) { _fun00018_ip = 492; continue _fun00017 }
 484:
            kilo = backup.bgNeutral;
            _fun00018_ip = 498; continue _fun00017;
 492:
            kilo = backup.bg;
 498:
            verify = new Array(3);
            verify[0] = kilo;
            backup = backup.container;
            verify[1] = backup;
            backup = {};
            kilo = 0;
            if(romeo) { _fun00018_ip = 525; continue _fun00017 }
 522:
            kilo = sizing;
 525:
            backup['paddingTop'] = kilo;
            verify[2] = backup;
            oscar['style'] = verify;
            if(!romeo) { _fun00018_ip = 580; continue _fun00017 }
 541:
            kilo = _closure1_slot15;
            backup = _closure1_slot1;
            sizing = _closure1_slot2;
            verify = 40;
            verify = sizing[verify];
            backup = backup.bind(tango)(verify);
            verify = {};
            sizing = true;
            verify['hidden'] = sizing;
            romeo = kilo.bind(tango)(backup, verify);
 580:
            verify = new Array(2);
            verify[0] = romeo;
            romeo = _closure1_slot15;
            if(yankee) { _fun00018_ip = 601; continue _fun00017 }
 595:
            yankee = _closure1_slot24;
            _fun00018_ip = 621; continue _fun00017;
 601:
            backup = _closure1_slot1;
            kilo = _closure1_slot2;
            offset = 41;
            offset = kilo[offset];
            yankee = backup.bind(tango)(offset);
 621:
            offset = {};
            update = offset;
            echo = foxtrot;
            foxtrot = copyDataProperties(update, echo);
            offset = romeo.bind(tango)(yankee, offset);
            verify[1] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report['children'] = oscar;
            report = zulu.bind(tango)(mike, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();
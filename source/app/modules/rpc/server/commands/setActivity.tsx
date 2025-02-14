// app/modules/rpc/server/commands/setActivity.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    tango = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    offset = mike.RPC_SCOPE_CONFIG;
    romeo = mike.RPC_LOCAL_SCOPE;
    mike = mike.TransportTypes;
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.ActivityPartyPrivacy;
    var _closure1_slot6 = tango;
    tango = mike.ActivityTypes;
    var _closure1_slot7 = tango;
    tango = mike.AnalyticEvents;
    var _closure1_slot8 = tango;
    tango = mike.RPCCommands;
    mike = mike.RPCErrors;
    var _closure1_slot9 = mike;
    mike = ['349134787773988865'];
    var _closure1_slot10 = mike;
    mike = {};
    golf = tango.SET_ACTIVITY;
    tango = {};
    verify = {};
    yankee = offset.ANY;
    foxtrot = 4;
    offset = oscar[foxtrot];
    offset = report.bind(entity)(offset);
    offset = offset.OAuth2Scopes;
    backup = offset.RPC;
    offset = new Array(3);
    offset[0] = backup;
    foxtrot = oscar[foxtrot];
    foxtrot = report.bind(entity)(foxtrot);
    foxtrot = foxtrot.OAuth2Scopes;
    foxtrot = foxtrot.RPC_ACTIVITIES_WRITE;
    offset[1] = foxtrot;
    offset[2] = romeo;
    verify[yankee] = offset;
    tango['scope'] = verify;
    verify = function(argFoo) { // Original name: validation
        verify = argFoo;
        kilo = _closure1_slot1;
        sizing = _closure1_slot2;
        options = 5;
        entity = sizing[options];
        backup = undefined;
        entity = kilo.bind(backup)(entity);
        mike = entity.bind(backup)(verify);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = verify.number;
        oscar = tango.bind(verify)();
        report = oscar.min;
        tango = 0;
        tango = report.bind(oscar)(tango);
        entity['pid'] = tango;
        tango = sizing[options];
        tango = kilo.bind(backup)(tango);
        oscar = tango.bind(backup)(verify);
        report = oscar.keys;
        tango = {};
        offset = verify.string;
        yankee = offset.bind(verify)();
        offset = yankee.min;
        romeo = 2;
        yankee = offset.bind(yankee)(romeo);
        offset = yankee.max;
        update = 128;
        offset = offset.bind(yankee)(update);
        tango['state'] = offset;
        offset = verify.string;
        yankee = offset.bind(verify)();
        offset = yankee.min;
        yankee = offset.bind(yankee)(romeo);
        offset = yankee.max;
        offset = offset.bind(yankee)(update);
        tango['details'] = offset;
        offset = sizing[options];
        offset = kilo.bind(backup)(offset);
        output = offset.bind(backup)(verify);
        foxtrot = output.keys;
        offset = {};
        yankee = verify.number;
        echo = yankee.bind(verify)();
        result = echo.min;
        yankee = 1;
        result = result.bind(echo)(yankee);
        offset['start'] = result;
        result = verify.number;
        echo = result.bind(verify)();
        result = echo.min;
        result = result.bind(echo)(yankee);
        offset['end'] = result;
        offset = foxtrot.bind(output)(offset);
        tango['timestamps'] = offset;
        offset = sizing[options];
        offset = kilo.bind(backup)(offset);
        output = offset.bind(backup)(verify);
        foxtrot = output.keys;
        offset = {};
        result = verify.string;
        echo = result.bind(verify)();
        result = echo.min;
        echo = result.bind(echo)(yankee);
        result = echo.max;
        source = 256;
        result = result.bind(echo)(source);
        offset['large_image'] = result;
        result = verify.string;
        echo = result.bind(verify)();
        result = echo.min;
        echo = result.bind(echo)(romeo);
        result = echo.max;
        result = result.bind(echo)(update);
        offset['large_text'] = result;
        result = verify.string;
        echo = result.bind(verify)();
        result = echo.min;
        echo = result.bind(echo)(yankee);
        result = echo.max;
        result = result.bind(echo)(source);
        offset['small_image'] = result;
        result = verify.string;
        echo = result.bind(verify)();
        result = echo.min;
        echo = result.bind(echo)(romeo);
        result = echo.max;
        result = result.bind(echo)(update);
        offset['small_text'] = result;
        offset = foxtrot.bind(output)(offset);
        tango['assets'] = offset;
        offset = sizing[options];
        offset = kilo.bind(backup)(offset);
        output = offset.bind(backup)(verify);
        foxtrot = output.keys;
        offset = {};
        result = verify.string;
        echo = result.bind(verify)();
        result = echo.min;
        echo = result.bind(echo)(romeo);
        result = echo.max;
        result = result.bind(echo)(update);
        offset['id'] = result;
        result = verify.array;
        source = result.bind(verify)();
        echo = source.items;
        result = verify.number;
        control = result.bind(verify)();
        result = control.min;
        result = result.bind(control)(yankee);
        echo = echo.bind(source)(result);
        result = echo.length;
        result = result.bind(echo)(romeo);
        offset['size'] = result;
        result = verify.number;
        source = result.bind(verify)();
        echo = source.default;
        control = _closure1_slot6;
        result = control.PRIVATE;
        source = echo.bind(source)(result);
        echo = source.valid;
        vacuum = control.PRIVATE;
        result = new Array(2);
        result[0] = vacuum;
        control = control.PUBLIC;
        result[1] = control;
        result = echo.bind(source)(result);
        offset['privacy'] = result;
        offset = foxtrot.bind(output)(offset);
        tango['party'] = offset;
        offset = sizing[options];
        offset = kilo.bind(backup)(offset);
        output = offset.bind(backup)(verify);
        foxtrot = output.keys;
        offset = {};
        result = verify.string;
        echo = result.bind(verify)();
        result = echo.min;
        echo = result.bind(echo)(romeo);
        result = echo.max;
        result = result.bind(echo)(update);
        offset['match'] = result;
        result = verify.string;
        echo = result.bind(verify)();
        result = echo.min;
        echo = result.bind(echo)(romeo);
        result = echo.max;
        result = result.bind(echo)(update);
        offset['join'] = result;
        result = verify.string;
        echo = result.bind(verify)();
        result = echo.min;
        echo = result.bind(echo)(romeo);
        result = echo.max;
        result = result.bind(echo)(update);
        offset['spectate'] = result;
        offset = foxtrot.bind(output)(offset);
        tango['secrets'] = offset;
        offset = verify.array;
        foxtrot = offset.bind(verify)();
        offset = foxtrot.items;
        options = sizing[options];
        options = kilo.bind(backup)(options);
        sizing = options.bind(backup)(verify);
        kilo = sizing.keys;
        options = {};
        backup = verify.string;
        output = backup.bind(verify)();
        backup = output.min;
        result = backup.bind(output)(yankee);
        output = result.max;
        backup = 32;
        result = output.bind(result)(backup);
        output = result.required;
        output = output.bind(result)();
        options['label'] = output;
        output = verify.string;
        result = output.bind(verify)();
        output = result.uri;
        result = output.bind(result)();
        output = result.min;
        echo = output.bind(result)(yankee);
        result = echo.max;
        output = 512;
        result = result.bind(echo)(output);
        output = result.required;
        output = output.bind(result)();
        options['url'] = output;
        options = kilo.bind(sizing)(options);
        offset = offset.bind(foxtrot)(options);
        options = offset.min;
        offset = options.bind(offset)(yankee);
        options = offset.max;
        options = options.bind(offset)(romeo);
        tango['buttons'] = options;
        options = verify.boolean;
        options = options.bind(verify)();
        tango['instance'] = options;
        options = verify.array;
        romeo = options.bind(verify)();
        offset = romeo.items;
        options = verify.string;
        foxtrot = options.bind(verify)();
        options = foxtrot.min;
        foxtrot = options.bind(foxtrot)(yankee);
        options = foxtrot.max;
        options = options.bind(foxtrot)(backup);
        offset = offset.bind(romeo)(options);
        options = offset.min;
        yankee = options.bind(offset)(yankee);
        offset = yankee.max;
        options = 3;
        options = offset.bind(yankee)(options);
        tango['supported_platforms'] = options;
        options = verify.number;
        offset = options.bind(verify)();
        verify = offset.default;
        golf = _closure1_slot7;
        options = golf.PLAYING;
        romeo = verify.bind(offset)(options);
        yankee = romeo.valid;
        context = golf.PLAYING;
        record = golf.LISTENING;
        config = golf.WATCHING;
        sequence = golf.COMPETING;
        papa = romeo;
        golf = papa[yankee](context, record, config, sequence, vacuum);
        tango['type'] = golf;
        oscar = report.bind(oscar)(tango);
        report = oscar.allow;
        tango = null;
        tango = report.bind(oscar)(tango);
        entity['activity'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['validation'] = verify;
    options = function(argFoo) { // Original name: handler
        _fun109666: for(var _fun109666_ip = 0; ; ) switch(_fun109666_ip) {
 0:
            entity = argFoo;
            options = entity.socket;
            var _closure2_slot0 = options;
            zulu = entity.args;
            golf = zulu.pid;
            var _closure2_slot1 = golf;
            report = zulu.activity;
            var _closure2_slot2 = report;
            entity = entity.isSocketConnected;
            var _closure2_slot3 = entity;
            tango = undefined;
            var _closure2_slot4 = tango;
            zulu = _closure1_slot5;
            oscar = zulu.IPC;
            verify = new Array(3);
            verify[0] = oscar;
            oscar = zulu.WEBSOCKET;
            verify[1] = oscar;
            zulu = zulu.POST_MESSAGE;
            verify[2] = zulu;
            oscar = verify.includes;
            zulu = options.transport;
            zulu = oscar.bind(verify)(zulu);
            if(zulu) { _fun109666_ip = 216; continue _fun109666 }
 117:
            oscar = _closure1_slot1;
            verify = _closure1_slot2;
            zulu = 6;
            zulu = verify[zulu];
            offset = oscar.bind(tango)(zulu);
            verify = {};
            zulu = _closure1_slot9;
            zulu = zulu.INVALID_COMMAND;
            verify['errorCode'] = zulu;
            romeo = options.transport;
            zulu = global;
            zulu = zulu.HermesInternal;
            yankee = zulu.concat;
            oscar = 'command not available from "';
            zulu = '" transport';
            source = yankee.bind(oscar)(romeo, zulu);
            oscar = offset.prototype;
            oscar = Object.create(oscar, {constructor: {value: offset}});
            vacuum = oscar;
            control = verify;
            zulu = new vacuum[offset](control, source, update);
            zulu = zulu instanceof Object ? zulu : oscar;
            throw zulu;
 216:
            oscar = null;
            if(!(oscar == golf)) { _fun109666_ip = 245; continue _fun109666 }
 222:
            zulu = _closure1_slot5;
            verify = zulu.IPC;
            zulu = options.transport;
            if(!(verify !== zulu)) { _fun109666_ip = 1620; continue _fun109666 }
 245:
            if(!(oscar != report)) { _fun109666_ip = 1539; continue _fun109666 }
 252:
            zulu = options.application;
            zulu = zulu.name;
            report['name'] = zulu;
            zulu = options.application;
            romeo = zulu.id;
            report['application_id'] = romeo;
            verify = options.transport;
            zulu = _closure1_slot5;
            zulu = zulu.POST_MESSAGE;
            zulu = verify === zulu;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 8;
            verify = yankee[verify];
            offset = offset.bind(tango)(verify);
            verify = offset.computeActivityFlags;
            verify = verify.bind(offset)(report, zulu);
            kilo = 0;
            if(!(verify > kilo)) { _fun109666_ip = 348; continue _fun109666 }
 342:
            report['flags'] = verify;
 348:
            yankee = _closure1_slot4;
            offset = yankee.getApplication;
            foxtrot = oscar != romeo;
            verify = undefined;
            if(!foxtrot) { _fun109666_ip = 370; continue _fun109666 }
 367:
            verify = romeo;
 370:
            verify = offset.bind(yankee)(verify);
            if(!(oscar != verify)) { _fun109666_ip = 661; continue _fun109666 }
 382:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            offset = 9;
            offset = romeo[offset];
            yankee = yankee.bind(tango)(offset);
            offset = yankee.isContextlessActivitiesEnabledForApp;
            offset = offset.bind(yankee)(verify);
            if(!offset) { _fun109666_ip = 661; continue _fun109666 }
 419:
            if(!zulu) { _fun109666_ip = 661; continue _fun109666 }
 425:
            offset = _closure1_slot3;
            zulu = offset.getCurrentEmbeddedActivity;
            zulu = zulu.bind(offset)();
            yankee = oscar == zulu;
            offset = undefined;
            if(yankee) { _fun109666_ip = 453; continue _fun109666 }
 448:
            offset = zulu.applicationId;
 453:
            verify = verify.id;
            if(!(offset === verify)) { _fun109666_ip = 661; continue _fun109666 }
 465:
            verify = zulu.compositeInstanceId;
            if(!(oscar != verify)) { _fun109666_ip = 536; continue _fun109666 }
 475:
            zulu = {};
            yankee = report.secrets;
            romeo = oscar == yankee;
            offset = undefined;
            if(romeo) { _fun109666_ip = 497; continue _fun109666 }
 492:
            offset = yankee.join;
 497:
            if(!(oscar != offset)) { _fun109666_ip = 504; continue _fun109666 }
 501:
            verify = offset;
 504:
            zulu['join'] = verify;
            verify = report.secrets;
            if(!(oscar == verify)) { _fun109666_ip = 520; continue _fun109666 }
 518:
            verify = {};
 520:
            control = zulu;
            source = verify;
            verify = copyDataProperties(control, source);
            report['secrets'] = zulu;
 536:
            zulu = {};
            offset = report.party;
            yankee = oscar == offset;
            verify = undefined;
            if(yankee) { _fun109666_ip = 558; continue _fun109666 }
 553:
            verify = offset.size;
 558:
            if(!(oscar == verify)) { _fun109666_ip = 588; continue _fun109666 }
 562:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            offset = 10;
            offset = romeo[offset];
            offset = yankee.bind(tango)(offset);
            verify = offset.DEFAULT_EMBEDDED_ACTIVITY_PARTY_SIZE;
 588:
            zulu['size'] = verify;
            verify = report.party;
            if(!(oscar == verify)) { _fun109666_ip = 604; continue _fun109666 }
 602:
            verify = {};
 604:
            control = zulu;
            source = verify;
            verify = copyDataProperties(control, source);
            report['party'] = zulu;
            verify = report.flags;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 10;
            zulu = yankee[zulu];
            zulu = offset.bind(tango)(zulu);
            zulu = zulu.DEFAULT_CONTEXTLESS_EMBEDDED_ACTIVITY_FLAGS;
            zulu = verify | zulu;
            report['flags'] = zulu;
 661:
            zulu = delete report.instance;
            zulu = report.party;
            if(!(oscar != zulu)) { _fun109666_ip = 681; continue _fun109666 }
 676:
            zulu = delete zulu.privacy;
 681:
            yankee = report.assets;
            _closure2_slot4 = yankee;
            verify = report.party;
            sizing = report.secrets;
            backup = report.timestamps;
            offset = report.buttons;
            zulu = report.type;
            if(!(oscar == zulu)) { _fun109666_ip = 740; continue _fun109666 }
 724:
            zulu = _closure1_slot7;
            zulu = zulu.PLAYING;
            report['type'] = zulu;
 740:
            if(!(oscar != sizing)) { _fun109666_ip = 999; continue _fun109666 }
 747:
            romeo = _closure1_slot1;
            zulu = _closure1_slot2;
            foxtrot = 11;
            zulu = zulu[foxtrot];
            romeo = romeo.bind(tango)(zulu);
            zulu = romeo.values;
            sizing = zulu.bind(romeo)(sizing);
            romeo = sizing.filter;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            zulu = romeo.bind(sizing)(zulu);
            if(!(oscar != verify)) { _fun109666_ip = 947; continue _fun109666 }
 801:
            sizing = _closure1_slot1;
            romeo = _closure1_slot2;
            romeo = romeo[foxtrot];
            sizing = sizing.bind(tango)(romeo);
            romeo = sizing.intersection;
            output = verify.id;
            verify = new Array(1);
            verify[0] = output;
            verify = romeo.bind(sizing)(zulu, verify);
            verify = verify.length;
            if(!(verify > kilo)) { _fun109666_ip = 947; continue _fun109666 }
 852:
            sizing = _closure1_slot10;
            romeo = sizing.includes;
            verify = options.application;
            verify = verify.id;
            verify = romeo.bind(sizing)(verify);
            if(verify) { _fun109666_ip = 947; continue _fun109666 }
 879:
            romeo = _closure1_slot1;
            sizing = _closure1_slot2;
            verify = 6;
            verify = sizing[verify];
            output = romeo.bind(tango)(verify);
            sizing = {};
            verify = _closure1_slot9;
            verify = verify.INVALID_ACTIVITY_SECRET;
            sizing['errorCode'] = verify;
            verify = output.prototype;
            romeo = Object.create(verify, {constructor: {value: output}});
            source = 'secrets cannot match the party id';
            vacuum = romeo;
            control = sizing;
            verify = new vacuum[output](control, source, update);
            verify = verify instanceof Object ? verify : romeo;
            throw verify;
 947:
            romeo = _closure1_slot1;
            verify = _closure1_slot2;
            verify = verify[foxtrot];
            romeo = romeo.bind(tango)(verify);
            verify = romeo.uniq;
            verify = verify.bind(romeo)(zulu);
            verify = verify.length;
            zulu = zulu.length;
            if(!(!(verify < zulu))) { _fun109666_ip = 1471; continue _fun109666 }
 992:
            if(!(oscar == offset)) { _fun109666_ip = 1403; continue _fun109666 }
 999:
            if(!(oscar != offset)) { _fun109666_ip = 1056; continue _fun109666 }
 1003:
            zulu = {};
            romeo = offset.map;
            verify = function(argFoo) {
                entity = argFoo;
                entity = entity.url;
                return entity;
            };
            verify = romeo.bind(offset)(verify);
            zulu['button_urls'] = verify;
            report['metadata'] = zulu;
            verify = offset.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.label;
                return entity;
            };
            zulu = verify.bind(offset)(zulu);
            report['buttons'] = zulu;
 1056:
            if(!(oscar != backup)) { _fun109666_ip = 1233; continue _fun109666 }
 1063:
            foxtrot = global;
            verify = foxtrot.Object;
            zulu = verify.keys;
            romeo = zulu.bind(verify)(backup);
            zulu = romeo.length;
            zulu = kilo < zulu;
            offset = 12;
            verify = 2;
            kilo = 0;
            if(!zulu) { _fun109666_ip = 1233; continue _fun109666 }
 1104:
            sizing = romeo[kilo];
            output = foxtrot.Date;
            zulu = output.now;
            output = zulu.bind(output)();
            zulu = output.toString;
            zulu = zulu.bind(output)();
            output = zulu.length;
            result = backup[sizing];
            zulu = result.toString;
            zulu = zulu.bind(result)();
            zulu = zulu.length;
            zulu = output - zulu;
            if(!(zulu > verify)) { _fun109666_ip = 1221; continue _fun109666 }
 1163:
            result = foxtrot.Math;
            output = result.floor;
            echo = backup[sizing];
            update = _closure1_slot1;
            zulu = _closure1_slot2;
            zulu = zulu[offset];
            zulu = update.bind(tango)(zulu);
            zulu = zulu.Millis;
            zulu = zulu.SECOND;
            zulu = echo * zulu;
            zulu = output.bind(result)(zulu);
            backup[sizing] = zulu;
 1221:
            kilo = kilo + 1;
            zulu = romeo.length;
            if(kilo < zulu) { _fun109666_ip = 1104; continue _fun109666 }
 1233:
            if(!(oscar != yankee)) { _fun109666_ip = 1361; continue _fun109666 }
 1240:
            zulu = options.application;
            if(!(oscar != zulu)) { _fun109666_ip = 1331; continue _fun109666 }
 1249:
            zulu = options.application;
            zulu = zulu.id;
            if(!(oscar != zulu)) { _fun109666_ip = 1331; continue _fun109666 }
 1263:
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 13;
            zulu = verify[zulu];
            offset = oscar.bind(tango)(zulu);
            verify = offset.fetchAssetIds;
            zulu = options.application;
            oscar = zulu.id;
            romeo = yankee.large_image;
            zulu = new Array(2);
            zulu[0] = romeo;
            yankee = yankee.small_image;
            zulu[1] = yankee;
            oscar = verify.bind(offset)(oscar, zulu);
            _fun109666_ip = 1384; continue _fun109666;
 1331:
            zulu = global;
            zulu = zulu.Error;
            verify = zulu.prototype;
            verify = Object.create(verify, {constructor: {value: zulu}});
            vacuum = verify;
            zulu = new vacuum[zulu](control);
            zulu = zulu instanceof Object ? zulu : verify;
            throw zulu;
 1361:
            zulu = global;
            offset = zulu.Promise;
            verify = offset.resolve;
            zulu = new Array(0);
            oscar = verify.bind(offset)(zulu);
 1384:
            zulu = oscar.then;
            mike = function(argFoo) {
                _fun109670: for(var _fun109670_ip = 0; ; ) switch(_fun109670_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    zulu = report().value;
                    mike = entity;
                    oscar = undefined;
                    mike = mike === oscar;
                    tango = undefined;
                    if(mike) { _fun109670_ip = 27; continue _fun109670 }
 24:
                    tango = zulu;
 27:
                    zulu = undefined;
                    if(mike) { _fun109670_ip = 57; continue _fun109670 }
 32:
                    golf = report().value;
                    report = entity;
                    report = report === oscar;
                    zulu = undefined;
                    mike = report;
                    if(report) { _fun109670_ip = 57; continue _fun109670 }
 51:
                    zulu = golf;
                    mike = report;
 57:
                    if(mike) { _fun109670_ip = 63; continue _fun109670 }
 60:
                    entity.return();
 63:
                    mike = _closure2_slot4;
                    golf = null;
                    if(!(golf != mike)) { _fun109670_ip = 126; continue _fun109670 }
 76:
                    if(!(golf == tango)) { _fun109670_ip = 91; continue _fun109670 }
 80:
                    mike = _closure2_slot4;
                    mike = delete mike.large_image;
                    _fun109670_ip = 101; continue _fun109670;
 91:
                    mike = _closure2_slot4;
                    mike['large_image'] = tango;
 101:
                    if(!(golf == zulu)) { _fun109670_ip = 116; continue _fun109670 }
 105:
                    mike = _closure2_slot4;
                    mike = delete mike.small_image;
                    _fun109670_ip = 126; continue _fun109670;
 116:
                    mike = _closure2_slot4;
                    mike['small_image'] = zulu;
 126:
                    mike = _closure2_slot3;
                    mike = mike.bind(oscar)();
                    if(mike) { _fun109670_ip = 139; continue _fun109670 }
 137:
                    return oscar;
 139:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 7;
                    zulu = report[zulu];
                    report = tango.bind(oscar)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    options = 'LOCAL_ACTIVITY_UPDATE';
                    zulu['type'] = options;
                    verify = _closure2_slot0;
                    options = verify.id;
                    zulu['socketId'] = options;
                    options = _closure2_slot1;
                    zulu['pid'] = options;
                    options = _closure2_slot2;
                    zulu['activity'] = options;
                    zulu = tango.bind(report)(zulu);
                    tango = options.secrets;
                    zulu = options.party;
                    report = {};
                    verify = verify.application;
                    verify = verify.id;
                    report['application_id'] = verify;
                    verify = options.type;
                    report['type'] = verify;
                    verify = options.name;
                    report['name'] = verify;
                    offset = options.details;
                    yankee = golf != offset;
                    options = '';
                    verify = options;
                    if(!yankee) { _fun109670_ip = 284; continue _fun109670 }
 281:
                    verify = offset;
 284:
                    report['details'] = verify;
                    verify = _closure2_slot2;
                    verify = verify.state;
                    offset = golf != verify;
                    if(!offset) { _fun109670_ip = 308; continue _fun109670 }
 305:
                    options = verify;
 308:
                    report['state'] = options;
                    if(!(golf != tango)) { _fun109670_ip = 355; continue _fun109670 }
 316:
                    options = tango.match;
                    options = !options;
                    options = !options;
                    report['has_match_secret'] = options;
                    tango = tango.join;
                    tango = !tango;
                    tango = !tango;
                    report['has_join_secret'] = tango;
 355:
                    tango = _closure2_slot4;
                    if(!(golf != tango)) { _fun109670_ip = 401; continue _fun109670 }
 363:
                    tango = _closure2_slot4;
                    tango = tango.large_image;
                    tango = !tango;
                    if(!tango) { _fun109670_ip = 392; continue _fun109670 }
 379:
                    options = _closure2_slot4;
                    options = options.small_image;
                    tango = !options;
 392:
                    tango = !tango;
                    report['has_images'] = tango;
 401:
                    if(!(golf != zulu)) { _fun109670_ip = 470; continue _fun109670 }
 405:
                    tango = zulu.size;
                    golf = golf != tango;
                    tango = undefined;
                    if(!golf) { _fun109670_ip = 451; continue _fun109670 }
 419:
                    golf = zulu.size;
                    options = 1;
                    verify = golf[options];
                    golf = 0;
                    golf = verify > golf;
                    tango = undefined;
                    if(!golf) { _fun109670_ip = 451; continue _fun109670 }
 442:
                    golf = zulu.size;
                    tango = golf[options];
 451:
                    report['party_max'] = tango;
                    zulu = zulu.id;
                    report['party_id'] = zulu;
 470:
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 14;
                    zulu = golf[zulu];
                    tango = tango.bind(oscar)(zulu);
                    zulu = tango.track;
                    mike = _closure1_slot8;
                    mike = mike.ACTIVITY_UPDATED;
                    mike = zulu.bind(tango)(mike, report);
                    entity = _closure2_slot2;
                    return entity;
                }
            };
            mike = zulu.bind(oscar)(mike);
            return mike;
 1403:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 6;
            mike = oscar[mike];
            verify = zulu.bind(tango)(mike);
            oscar = {};
            mike = _closure1_slot9;
            mike = mike.INVALID_ACTIVITY_SECRET;
            oscar['errorCode'] = mike;
            mike = verify.prototype;
            zulu = Object.create(mike, {constructor: {value: verify}});
            source = 'secrets cannot currently be sent with buttons';
            vacuum = zulu;
            control = oscar;
            mike = new vacuum[verify](control, source, update);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 1471:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 6;
            mike = oscar[mike];
            verify = zulu.bind(tango)(mike);
            oscar = {};
            mike = _closure1_slot9;
            mike = mike.INVALID_ACTIVITY_SECRET;
            oscar['errorCode'] = mike;
            mike = verify.prototype;
            zulu = Object.create(mike, {constructor: {value: verify}});
            source = 'secrets must be unique';
            vacuum = zulu;
            control = oscar;
            mike = new vacuum[verify](control, source, update);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 1539:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 7;
            mike = oscar[mike];
            oscar = zulu.bind(tango)(mike);
            zulu = oscar.dispatch;
            mike = {};
            verify = 'LOCAL_ACTIVITY_UPDATE';
            mike['type'] = verify;
            options = options.id;
            mike['socketId'] = options;
            mike['pid'] = golf;
            mike['activity'] = report;
            mike = zulu.bind(oscar)(mike);
            mike = global;
            zulu = mike.Promise;
            mike = zulu.resolve;
            mike = mike.bind(zulu)(report);
            return mike;
 1620:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 6;
            mike = report[mike];
            tango = zulu.bind(tango)(mike);
            zulu = {};
            entity = _closure1_slot9;
            entity = entity.INVALID_COMMAND;
            zulu['errorCode'] = entity;
            entity = tango.prototype;
            mike = Object.create(entity, {constructor: {value: tango}});
            source = 'nonzero pid required';
            vacuum = mike;
            control = zulu;
            entity = new vacuum[tango](control, source, update);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    tango['handler'] = options;
    mike[golf] = tango;
    tango = 15;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/commands/setActivity.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
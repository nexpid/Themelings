// app/modules/rpc/server/commands/setActivity.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    offset = michal.RPC_SCOPE_CONFIG;
    romeon = michal.RPC_LOCAL_SCOPE;
    michal = michal.TransportTypes;
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.ActivityPartyPrivacy;
    var _closure1_slot6 = tangon;
    tangon = michal.ActivityTypes;
    var _closure1_slot7 = tangon;
    tangon = michal.AnalyticEvents;
    var _closure1_slot8 = tangon;
    tangon = michal.RPCCommands;
    michal = michal.RPCErrors;
    var _closure1_slot9 = michal;
    michal = ['349134787773988865'];
    var _closure1_slot10 = michal;
    michal = {};
    golfie = tangon.SET_ACTIVITY;
    tangon = {};
    verify = {};
    yankee = offset.ANY;
    foxtra = 4;
    offset = oscard[foxtra];
    offset = report.bind(entity)(offset);
    offset = offset.OAuth2Scopes;
    backup = offset.RPC;
    offset = new Array(3);
    offset[0] = backup;
    foxtra = oscard[foxtra];
    foxtra = report.bind(entity)(foxtra);
    foxtra = foxtra.OAuth2Scopes;
    foxtra = foxtra.RPC_ACTIVITIES_WRITE;
    offset[1] = foxtra;
    offset[2] = romeon;
    verify[yankee] = offset;
    tangon['scope'] = verify;
    verify = function(argFoo) { // Original name: validation
        verify = argFoo;
        kiloes = _closure1_slot1;
        sizing = _closure1_slot2;
        option = 5;
        entity = sizing[option];
        backup = undefined;
        entity = kiloes.bind(backup)(entity);
        michal = entity.bind(backup)(verify);
        entity = michal.required;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.keys;
        entity = {};
        tangon = verify.number;
        oscard = tangon.bind(verify)();
        report = oscard.min;
        tangon = 0;
        tangon = report.bind(oscard)(tangon);
        entity['pid'] = tangon;
        tangon = sizing[option];
        tangon = kiloes.bind(backup)(tangon);
        oscard = tangon.bind(backup)(verify);
        report = oscard.keys;
        tangon = {};
        offset = verify.string;
        yankee = offset.bind(verify)();
        offset = yankee.min;
        romeon = 2;
        yankee = offset.bind(yankee)(romeon);
        offset = yankee.max;
        update = 128;
        offset = offset.bind(yankee)(update);
        tangon['state'] = offset;
        offset = verify.string;
        yankee = offset.bind(verify)();
        offset = yankee.min;
        yankee = offset.bind(yankee)(romeon);
        offset = yankee.max;
        offset = offset.bind(yankee)(update);
        tangon['details'] = offset;
        offset = sizing[option];
        offset = kiloes.bind(backup)(offset);
        output = offset.bind(backup)(verify);
        foxtra = output.keys;
        offset = {};
        yankee = verify.number;
        echoed = yankee.bind(verify)();
        result = echoed.min;
        yankee = 1;
        result = result.bind(echoed)(yankee);
        offset['start'] = result;
        result = verify.number;
        echoed = result.bind(verify)();
        result = echoed.min;
        result = result.bind(echoed)(yankee);
        offset['end'] = result;
        offset = foxtra.bind(output)(offset);
        tangon['timestamps'] = offset;
        offset = sizing[option];
        offset = kiloes.bind(backup)(offset);
        output = offset.bind(backup)(verify);
        foxtra = output.keys;
        offset = {};
        result = verify.string;
        echoed = result.bind(verify)();
        result = echoed.min;
        echoed = result.bind(echoed)(yankee);
        result = echoed.max;
        source = 256;
        result = result.bind(echoed)(source);
        offset['large_image'] = result;
        result = verify.string;
        echoed = result.bind(verify)();
        result = echoed.min;
        echoed = result.bind(echoed)(romeon);
        result = echoed.max;
        result = result.bind(echoed)(update);
        offset['large_text'] = result;
        result = verify.string;
        echoed = result.bind(verify)();
        result = echoed.min;
        echoed = result.bind(echoed)(yankee);
        result = echoed.max;
        result = result.bind(echoed)(source);
        offset['small_image'] = result;
        result = verify.string;
        echoed = result.bind(verify)();
        result = echoed.min;
        echoed = result.bind(echoed)(romeon);
        result = echoed.max;
        result = result.bind(echoed)(update);
        offset['small_text'] = result;
        offset = foxtra.bind(output)(offset);
        tangon['assets'] = offset;
        offset = sizing[option];
        offset = kiloes.bind(backup)(offset);
        output = offset.bind(backup)(verify);
        foxtra = output.keys;
        offset = {};
        result = verify.string;
        echoed = result.bind(verify)();
        result = echoed.min;
        echoed = result.bind(echoed)(romeon);
        result = echoed.max;
        result = result.bind(echoed)(update);
        offset['id'] = result;
        result = verify.array;
        source = result.bind(verify)();
        echoed = source.items;
        result = verify.number;
        ctrled = result.bind(verify)();
        result = ctrled.min;
        result = result.bind(ctrled)(yankee);
        echoed = echoed.bind(source)(result);
        result = echoed.length;
        result = result.bind(echoed)(romeon);
        offset['size'] = result;
        result = verify.number;
        source = result.bind(verify)();
        echoed = source.default;
        ctrled = _closure1_slot6;
        result = ctrled.PRIVATE;
        source = echoed.bind(source)(result);
        echoed = source.valid;
        vacuum = ctrled.PRIVATE;
        result = new Array(2);
        result[0] = vacuum;
        ctrled = ctrled.PUBLIC;
        result[1] = ctrled;
        result = echoed.bind(source)(result);
        offset['privacy'] = result;
        offset = foxtra.bind(output)(offset);
        tangon['party'] = offset;
        offset = sizing[option];
        offset = kiloes.bind(backup)(offset);
        output = offset.bind(backup)(verify);
        foxtra = output.keys;
        offset = {};
        result = verify.string;
        echoed = result.bind(verify)();
        result = echoed.min;
        echoed = result.bind(echoed)(romeon);
        result = echoed.max;
        result = result.bind(echoed)(update);
        offset['match'] = result;
        result = verify.string;
        echoed = result.bind(verify)();
        result = echoed.min;
        echoed = result.bind(echoed)(romeon);
        result = echoed.max;
        result = result.bind(echoed)(update);
        offset['join'] = result;
        result = verify.string;
        echoed = result.bind(verify)();
        result = echoed.min;
        echoed = result.bind(echoed)(romeon);
        result = echoed.max;
        result = result.bind(echoed)(update);
        offset['spectate'] = result;
        offset = foxtra.bind(output)(offset);
        tangon['secrets'] = offset;
        offset = verify.array;
        foxtra = offset.bind(verify)();
        offset = foxtra.items;
        option = sizing[option];
        option = kiloes.bind(backup)(option);
        sizing = option.bind(backup)(verify);
        kiloes = sizing.keys;
        option = {};
        backup = verify.string;
        output = backup.bind(verify)();
        backup = output.min;
        result = backup.bind(output)(yankee);
        output = result.max;
        backup = 32;
        result = output.bind(result)(backup);
        output = result.required;
        output = output.bind(result)();
        option['label'] = output;
        output = verify.string;
        result = output.bind(verify)();
        output = result.uri;
        result = output.bind(result)();
        output = result.min;
        echoed = output.bind(result)(yankee);
        result = echoed.max;
        output = 512;
        result = result.bind(echoed)(output);
        output = result.required;
        output = output.bind(result)();
        option['url'] = output;
        option = kiloes.bind(sizing)(option);
        offset = offset.bind(foxtra)(option);
        option = offset.min;
        offset = option.bind(offset)(yankee);
        option = offset.max;
        option = option.bind(offset)(romeon);
        tangon['buttons'] = option;
        option = verify.boolean;
        option = option.bind(verify)();
        tangon['instance'] = option;
        option = verify.array;
        romeon = option.bind(verify)();
        offset = romeon.items;
        option = verify.string;
        foxtra = option.bind(verify)();
        option = foxtra.min;
        foxtra = option.bind(foxtra)(yankee);
        option = foxtra.max;
        option = option.bind(foxtra)(backup);
        offset = offset.bind(romeon)(option);
        option = offset.min;
        yankee = option.bind(offset)(yankee);
        offset = yankee.max;
        option = 3;
        option = offset.bind(yankee)(option);
        tangon['supported_platforms'] = option;
        option = verify.number;
        offset = option.bind(verify)();
        verify = offset.default;
        golfie = _closure1_slot7;
        option = golfie.PLAYING;
        romeon = verify.bind(offset)(option);
        yankee = romeon.valid;
        cntext = golfie.PLAYING;
        record = golfie.LISTENING;
        config = golfie.WATCHING;
        sequen = golfie.COMPETING;
        papara = romeon;
        golfie = papara[yankee](cntext, record, config, sequen, vacuum);
        tangon['type'] = golfie;
        oscard = report.bind(oscard)(tangon);
        report = oscard.allow;
        tangon = null;
        tangon = report.bind(oscard)(tangon);
        entity['activity'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['validation'] = verify;
    option = function(argFoo) { // Original name: handler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            option = entity.socket;
            var _closure2_slot0 = option;
            zuuluu = entity.args;
            golfie = zuuluu.pid;
            var _closure2_slot1 = golfie;
            report = zuuluu.activity;
            var _closure2_slot2 = report;
            entity = entity.isSocketConnected;
            var _closure2_slot3 = entity;
            tangon = undefined;
            var _closure2_slot4 = tangon;
            zuuluu = _closure1_slot5;
            oscard = zuuluu.IPC;
            verify = new Array(3);
            verify[0] = oscard;
            oscard = zuuluu.WEBSOCKET;
            verify[1] = oscard;
            zuuluu = zuuluu.POST_MESSAGE;
            verify[2] = zuuluu;
            oscard = verify.includes;
            zuuluu = option.transport;
            zuuluu = oscard.bind(verify)(zuuluu);
            if(zuuluu) { _fun00002_ip = 216; continue _fun00001 }
 117:
            oscard = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 6;
            zuuluu = verify[zuuluu];
            offset = oscard.bind(tangon)(zuuluu);
            verify = {};
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.INVALID_COMMAND;
            verify['errorCode'] = zuuluu;
            romeon = option.transport;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            yankee = zuuluu.concat;
            oscard = 'command not available from "';
            zuuluu = '" transport';
            source = yankee.bind(oscard)(romeon, zuuluu);
            oscard = offset.prototype;
            oscard = Object.create(oscard, {constructor: {value: offset}});
            vacuum = oscard;
            ctrled = verify;
            zuuluu = new vacuum[offset](ctrled, source, update);
            zuuluu = zuuluu instanceof Object ? zuuluu : oscard;
            throw zuuluu;
 216:
            oscard = null;
            if(!(oscard == golfie)) { _fun00002_ip = 245; continue _fun00001 }
 222:
            zuuluu = _closure1_slot5;
            verify = zuuluu.IPC;
            zuuluu = option.transport;
            if(!(verify !== zuuluu)) { _fun00002_ip = 1620; continue _fun00001 }
 245:
            if(!(oscard != report)) { _fun00002_ip = 1539; continue _fun00001 }
 252:
            zuuluu = option.application;
            zuuluu = zuuluu.name;
            report['name'] = zuuluu;
            zuuluu = option.application;
            romeon = zuuluu.id;
            report['application_id'] = romeon;
            verify = option.transport;
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.POST_MESSAGE;
            zuuluu = verify === zuuluu;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 8;
            verify = yankee[verify];
            offset = offset.bind(tangon)(verify);
            verify = offset.computeActivityFlags;
            verify = verify.bind(offset)(report, zuuluu);
            kiloes = 0;
            if(!(verify > kiloes)) { _fun00002_ip = 348; continue _fun00001 }
 342:
            report['flags'] = verify;
 348:
            yankee = _closure1_slot4;
            offset = yankee.getApplication;
            foxtra = oscard != romeon;
            verify = undefined;
            if(!foxtra) { _fun00002_ip = 370; continue _fun00001 }
 367:
            verify = romeon;
 370:
            verify = offset.bind(yankee)(verify);
            if(!(oscard != verify)) { _fun00002_ip = 661; continue _fun00001 }
 382:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            offset = 9;
            offset = romeon[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = yankee.isContextlessActivitiesEnabledForApp;
            offset = offset.bind(yankee)(verify);
            if(!offset) { _fun00002_ip = 661; continue _fun00001 }
 419:
            if(!zuuluu) { _fun00002_ip = 661; continue _fun00001 }
 425:
            offset = _closure1_slot3;
            zuuluu = offset.getCurrentEmbeddedActivity;
            zuuluu = zuuluu.bind(offset)();
            yankee = oscard == zuuluu;
            offset = undefined;
            if(yankee) { _fun00002_ip = 453; continue _fun00001 }
 448:
            offset = zuuluu.applicationId;
 453:
            verify = verify.id;
            if(!(offset === verify)) { _fun00002_ip = 661; continue _fun00001 }
 465:
            verify = zuuluu.compositeInstanceId;
            if(!(oscard != verify)) { _fun00002_ip = 536; continue _fun00001 }
 475:
            zuuluu = {};
            yankee = report.secrets;
            romeon = oscard == yankee;
            offset = undefined;
            if(romeon) { _fun00002_ip = 497; continue _fun00001 }
 492:
            offset = yankee.join;
 497:
            if(!(oscard != offset)) { _fun00002_ip = 504; continue _fun00001 }
 501:
            verify = offset;
 504:
            zuuluu['join'] = verify;
            verify = report.secrets;
            if(!(oscard == verify)) { _fun00002_ip = 520; continue _fun00001 }
 518:
            verify = {};
 520:
            ctrled = zuuluu;
            source = verify;
            verify = copyDataProperties(ctrled, source);
            report['secrets'] = zuuluu;
 536:
            zuuluu = {};
            offset = report.party;
            yankee = oscard == offset;
            verify = undefined;
            if(yankee) { _fun00002_ip = 558; continue _fun00001 }
 553:
            verify = offset.size;
 558:
            if(!(oscard == verify)) { _fun00002_ip = 588; continue _fun00001 }
 562:
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            offset = 10;
            offset = romeon[offset];
            offset = yankee.bind(tangon)(offset);
            verify = offset.DEFAULT_EMBEDDED_ACTIVITY_PARTY_SIZE;
 588:
            zuuluu['size'] = verify;
            verify = report.party;
            if(!(oscard == verify)) { _fun00002_ip = 604; continue _fun00001 }
 602:
            verify = {};
 604:
            ctrled = zuuluu;
            source = verify;
            verify = copyDataProperties(ctrled, source);
            report['party'] = zuuluu;
            verify = report.flags;
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 10;
            zuuluu = yankee[zuuluu];
            zuuluu = offset.bind(tangon)(zuuluu);
            zuuluu = zuuluu.DEFAULT_CONTEXTLESS_EMBEDDED_ACTIVITY_FLAGS;
            zuuluu = verify | zuuluu;
            report['flags'] = zuuluu;
 661:
            zuuluu = delete report.instance;
            zuuluu = report.party;
            if(!(oscard != zuuluu)) { _fun00002_ip = 681; continue _fun00001 }
 676:
            zuuluu = delete zuuluu.privacy;
 681:
            yankee = report.assets;
            _closure2_slot4 = yankee;
            verify = report.party;
            sizing = report.secrets;
            backup = report.timestamps;
            offset = report.buttons;
            zuuluu = report.type;
            if(!(oscard == zuuluu)) { _fun00002_ip = 740; continue _fun00001 }
 724:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.PLAYING;
            report['type'] = zuuluu;
 740:
            if(!(oscard != sizing)) { _fun00002_ip = 999; continue _fun00001 }
 747:
            romeon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            foxtra = 11;
            zuuluu = zuuluu[foxtra];
            romeon = romeon.bind(tangon)(zuuluu);
            zuuluu = romeon.values;
            sizing = zuuluu.bind(romeon)(sizing);
            romeon = sizing.filter;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            zuuluu = romeon.bind(sizing)(zuuluu);
            if(!(oscard != verify)) { _fun00002_ip = 947; continue _fun00001 }
 801:
            sizing = _closure1_slot1;
            romeon = _closure1_slot2;
            romeon = romeon[foxtra];
            sizing = sizing.bind(tangon)(romeon);
            romeon = sizing.intersection;
            output = verify.id;
            verify = new Array(1);
            verify[0] = output;
            verify = romeon.bind(sizing)(zuuluu, verify);
            verify = verify.length;
            if(!(verify > kiloes)) { _fun00002_ip = 947; continue _fun00001 }
 852:
            sizing = _closure1_slot10;
            romeon = sizing.includes;
            verify = option.application;
            verify = verify.id;
            verify = romeon.bind(sizing)(verify);
            if(verify) { _fun00002_ip = 947; continue _fun00001 }
 879:
            romeon = _closure1_slot1;
            sizing = _closure1_slot2;
            verify = 6;
            verify = sizing[verify];
            output = romeon.bind(tangon)(verify);
            sizing = {};
            verify = _closure1_slot9;
            verify = verify.INVALID_ACTIVITY_SECRET;
            sizing['errorCode'] = verify;
            verify = output.prototype;
            romeon = Object.create(verify, {constructor: {value: output}});
            source = 'secrets cannot match the party id';
            vacuum = romeon;
            ctrled = sizing;
            verify = new vacuum[output](ctrled, source, update);
            verify = verify instanceof Object ? verify : romeon;
            throw verify;
 947:
            romeon = _closure1_slot1;
            verify = _closure1_slot2;
            verify = verify[foxtra];
            romeon = romeon.bind(tangon)(verify);
            verify = romeon.uniq;
            verify = verify.bind(romeon)(zuuluu);
            verify = verify.length;
            zuuluu = zuuluu.length;
            if(!(!(verify < zuuluu))) { _fun00002_ip = 1471; continue _fun00001 }
 992:
            if(!(oscard == offset)) { _fun00002_ip = 1403; continue _fun00001 }
 999:
            if(!(oscard != offset)) { _fun00002_ip = 1056; continue _fun00001 }
 1003:
            zuuluu = {};
            romeon = offset.map;
            verify = function(argFoo) {
                entity = argFoo;
                entity = entity.url;
                return entity;
            };
            verify = romeon.bind(offset)(verify);
            zuuluu['button_urls'] = verify;
            report['metadata'] = zuuluu;
            verify = offset.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.label;
                return entity;
            };
            zuuluu = verify.bind(offset)(zuuluu);
            report['buttons'] = zuuluu;
 1056:
            if(!(oscard != backup)) { _fun00002_ip = 1233; continue _fun00001 }
 1063:
            foxtra = global;
            verify = foxtra.Object;
            zuuluu = verify.keys;
            romeon = zuuluu.bind(verify)(backup);
            zuuluu = romeon.length;
            zuuluu = kiloes < zuuluu;
            offset = 12;
            verify = 2;
            kiloes = 0;
            if(!zuuluu) { _fun00002_ip = 1233; continue _fun00001 }
 1104:
            sizing = romeon[kiloes];
            output = foxtra.Date;
            zuuluu = output.now;
            output = zuuluu.bind(output)();
            zuuluu = output.toString;
            zuuluu = zuuluu.bind(output)();
            output = zuuluu.length;
            result = backup[sizing];
            zuuluu = result.toString;
            zuuluu = zuuluu.bind(result)();
            zuuluu = zuuluu.length;
            zuuluu = output - zuuluu;
            if(!(zuuluu > verify)) { _fun00002_ip = 1221; continue _fun00001 }
 1163:
            result = foxtra.Math;
            output = result.floor;
            echoed = backup[sizing];
            update = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[offset];
            zuuluu = update.bind(tangon)(zuuluu);
            zuuluu = zuuluu.Millis;
            zuuluu = zuuluu.SECOND;
            zuuluu = echoed * zuuluu;
            zuuluu = output.bind(result)(zuuluu);
            backup[sizing] = zuuluu;
 1221:
            kiloes = kiloes + 1;
            zuuluu = romeon.length;
            if(kiloes < zuuluu) { _fun00002_ip = 1104; continue _fun00001 }
 1233:
            if(!(oscard != yankee)) { _fun00002_ip = 1361; continue _fun00001 }
 1240:
            zuuluu = option.application;
            if(!(oscard != zuuluu)) { _fun00002_ip = 1331; continue _fun00001 }
 1249:
            zuuluu = option.application;
            zuuluu = zuuluu.id;
            if(!(oscard != zuuluu)) { _fun00002_ip = 1331; continue _fun00001 }
 1263:
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 13;
            zuuluu = verify[zuuluu];
            offset = oscard.bind(tangon)(zuuluu);
            verify = offset.fetchAssetIds;
            zuuluu = option.application;
            oscard = zuuluu.id;
            romeon = yankee.large_image;
            zuuluu = new Array(2);
            zuuluu[0] = romeon;
            yankee = yankee.small_image;
            zuuluu[1] = yankee;
            oscard = verify.bind(offset)(oscard, zuuluu);
            _fun00002_ip = 1384; continue _fun00001;
 1331:
            zuuluu = global;
            zuuluu = zuuluu.Error;
            verify = zuuluu.prototype;
            verify = Object.create(verify, {constructor: {value: zuuluu}});
            vacuum = verify;
            zuuluu = new vacuum[zuuluu](ctrled);
            zuuluu = zuuluu instanceof Object ? zuuluu : verify;
            throw zuuluu;
 1361:
            zuuluu = global;
            offset = zuuluu.Promise;
            verify = offset.resolve;
            zuuluu = new Array(0);
            oscard = verify.bind(offset)(zuuluu);
 1384:
            zuuluu = oscard.then;
            michal = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = argFoo;
                    entity = report[Symbol.iterator];
                    report = entity().next;
                    zuuluu = report().value;
                    michal = entity;
                    oscard = undefined;
                    michal = michal === oscard;
                    tangon = undefined;
                    if(michal) { _fun00004_ip = 27; continue _fun00003 }
 24:
                    tangon = zuuluu;
 27:
                    zuuluu = undefined;
                    if(michal) { _fun00004_ip = 57; continue _fun00003 }
 32:
                    golfie = report().value;
                    report = entity;
                    report = report === oscard;
                    zuuluu = undefined;
                    michal = report;
                    if(report) { _fun00004_ip = 57; continue _fun00003 }
 51:
                    zuuluu = golfie;
                    michal = report;
 57:
                    if(michal) { _fun00004_ip = 63; continue _fun00003 }
 60:
                    entity.return();
 63:
                    michal = _closure2_slot4;
                    golfie = null;
                    if(!(golfie != michal)) { _fun00004_ip = 126; continue _fun00003 }
 76:
                    if(!(golfie == tangon)) { _fun00004_ip = 91; continue _fun00003 }
 80:
                    michal = _closure2_slot4;
                    michal = delete michal.large_image;
                    _fun00004_ip = 101; continue _fun00003;
 91:
                    michal = _closure2_slot4;
                    michal['large_image'] = tangon;
 101:
                    if(!(golfie == zuuluu)) { _fun00004_ip = 116; continue _fun00003 }
 105:
                    michal = _closure2_slot4;
                    michal = delete michal.small_image;
                    _fun00004_ip = 126; continue _fun00003;
 116:
                    michal = _closure2_slot4;
                    michal['small_image'] = zuuluu;
 126:
                    michal = _closure2_slot3;
                    michal = michal.bind(oscard)();
                    if(michal) { _fun00004_ip = 139; continue _fun00003 }
 137:
                    return oscard;
 139:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(oscard)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    option = 'LOCAL_ACTIVITY_UPDATE';
                    zuuluu['type'] = option;
                    verify = _closure2_slot0;
                    option = verify.id;
                    zuuluu['socketId'] = option;
                    option = _closure2_slot1;
                    zuuluu['pid'] = option;
                    option = _closure2_slot2;
                    zuuluu['activity'] = option;
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = option.secrets;
                    zuuluu = option.party;
                    report = {};
                    verify = verify.application;
                    verify = verify.id;
                    report['application_id'] = verify;
                    verify = option.type;
                    report['type'] = verify;
                    verify = option.name;
                    report['name'] = verify;
                    offset = option.details;
                    yankee = golfie != offset;
                    option = '';
                    verify = option;
                    if(!yankee) { _fun00004_ip = 284; continue _fun00003 }
 281:
                    verify = offset;
 284:
                    report['details'] = verify;
                    verify = _closure2_slot2;
                    verify = verify.state;
                    offset = golfie != verify;
                    if(!offset) { _fun00004_ip = 308; continue _fun00003 }
 305:
                    option = verify;
 308:
                    report['state'] = option;
                    if(!(golfie != tangon)) { _fun00004_ip = 355; continue _fun00003 }
 316:
                    option = tangon.match;
                    option = !option;
                    option = !option;
                    report['has_match_secret'] = option;
                    tangon = tangon.join;
                    tangon = !tangon;
                    tangon = !tangon;
                    report['has_join_secret'] = tangon;
 355:
                    tangon = _closure2_slot4;
                    if(!(golfie != tangon)) { _fun00004_ip = 401; continue _fun00003 }
 363:
                    tangon = _closure2_slot4;
                    tangon = tangon.large_image;
                    tangon = !tangon;
                    if(!tangon) { _fun00004_ip = 392; continue _fun00003 }
 379:
                    option = _closure2_slot4;
                    option = option.small_image;
                    tangon = !option;
 392:
                    tangon = !tangon;
                    report['has_images'] = tangon;
 401:
                    if(!(golfie != zuuluu)) { _fun00004_ip = 470; continue _fun00003 }
 405:
                    tangon = zuuluu.size;
                    golfie = golfie != tangon;
                    tangon = undefined;
                    if(!golfie) { _fun00004_ip = 451; continue _fun00003 }
 419:
                    golfie = zuuluu.size;
                    option = 1;
                    verify = golfie[option];
                    golfie = 0;
                    golfie = verify > golfie;
                    tangon = undefined;
                    if(!golfie) { _fun00004_ip = 451; continue _fun00003 }
 442:
                    golfie = zuuluu.size;
                    tangon = golfie[option];
 451:
                    report['party_max'] = tangon;
                    zuuluu = zuuluu.id;
                    report['party_id'] = zuuluu;
 470:
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 14;
                    zuuluu = golfie[zuuluu];
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.track;
                    michal = _closure1_slot8;
                    michal = michal.ACTIVITY_UPDATED;
                    michal = zuuluu.bind(tangon)(michal, report);
                    entity = _closure2_slot2;
                    return entity;
                }
            };
            michal = zuuluu.bind(oscard)(michal);
            return michal;
 1403:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 6;
            michal = oscard[michal];
            verify = zuuluu.bind(tangon)(michal);
            oscard = {};
            michal = _closure1_slot9;
            michal = michal.INVALID_ACTIVITY_SECRET;
            oscard['errorCode'] = michal;
            michal = verify.prototype;
            zuuluu = Object.create(michal, {constructor: {value: verify}});
            source = 'secrets cannot currently be sent with buttons';
            vacuum = zuuluu;
            ctrled = oscard;
            michal = new vacuum[verify](ctrled, source, update);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 1471:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 6;
            michal = oscard[michal];
            verify = zuuluu.bind(tangon)(michal);
            oscard = {};
            michal = _closure1_slot9;
            michal = michal.INVALID_ACTIVITY_SECRET;
            oscard['errorCode'] = michal;
            michal = verify.prototype;
            zuuluu = Object.create(michal, {constructor: {value: verify}});
            source = 'secrets must be unique';
            vacuum = zuuluu;
            ctrled = oscard;
            michal = new vacuum[verify](ctrled, source, update);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 1539:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 7;
            michal = oscard[michal];
            oscard = zuuluu.bind(tangon)(michal);
            zuuluu = oscard.dispatch;
            michal = {};
            verify = 'LOCAL_ACTIVITY_UPDATE';
            michal['type'] = verify;
            option = option.id;
            michal['socketId'] = option;
            michal['pid'] = golfie;
            michal['activity'] = report;
            michal = zuuluu.bind(oscard)(michal);
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.resolve;
            michal = michal.bind(zuuluu)(report);
            return michal;
 1620:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 6;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = {};
            entity = _closure1_slot9;
            entity = entity.INVALID_COMMAND;
            zuuluu['errorCode'] = entity;
            entity = tangon.prototype;
            michal = Object.create(entity, {constructor: {value: tangon}});
            source = 'nonzero pid required';
            vacuum = michal;
            ctrled = zuuluu;
            entity = new vacuum[tangon](ctrled, source, update);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    tangon['handler'] = option;
    michal[golfie] = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/commands/setActivity.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();
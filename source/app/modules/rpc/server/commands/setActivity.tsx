// app/modules/rpc/server/commands/setActivity.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    golfie = entity.Object;
    tangon = golfie.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(golfie)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    offset = michal.RPC_SCOPE_CONFIG;
    romeon = michal.RPC_LOCAL_SCOPE;
    michal = michal.TransportTypes;
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.ActivityGamePlatforms;
    var _closure1_slot4 = tangon;
    tangon = michal.ActivityPartyPrivacy;
    var _closure1_slot5 = tangon;
    tangon = michal.ActivityTypes;
    var _closure1_slot6 = tangon;
    tangon = michal.AnalyticEvents;
    var _closure1_slot7 = tangon;
    tangon = michal.RPCCommands;
    michal = michal.RPCErrors;
    var _closure1_slot8 = michal;
    michal = ['349134787773988865'];
    var _closure1_slot9 = michal;
    michal = {};
    golfie = tangon.SET_ACTIVITY;
    tangon = {};
    verify = {};
    yankee = offset.ANY;
    foxtra = 2;
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
        option = 3;
        entity = sizing[option];
        backup = undefined;
        entity = kiloes.bind(backup)(entity);
        michal = entity.bind(backup)(verify);
        entity = michal.required;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.keys;
        entity = {};
        tangon = verify.number;
        report = tangon.bind(verify)();
        tangon = report.min;
        vacuum = 0;
        tangon = tangon.bind(report)(vacuum);
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
        result = result.bind(ctrled)(vacuum);
        echoed = echoed.bind(source)(result);
        result = echoed.length;
        result = result.bind(echoed)(romeon);
        offset['size'] = result;
        result = verify.number;
        source = result.bind(verify)();
        echoed = source.default;
        ctrled = _closure1_slot5;
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
        option = 10;
        option = offset.bind(yankee)(option);
        tangon['supported_platforms'] = option;
        option = verify.number;
        offset = option.bind(verify)();
        verify = offset.default;
        golfie = _closure1_slot6;
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
            zuuluu = _closure1_slot3;
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
            zuuluu = 4;
            zuuluu = verify[zuuluu];
            offset = oscard.bind(tangon)(zuuluu);
            verify = {};
            zuuluu = _closure1_slot8;
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
            zuuluu = _closure1_slot3;
            verify = zuuluu.IPC;
            zuuluu = option.transport;
            if(!(verify !== zuuluu)) { _fun00002_ip = 1335; continue _fun00001 }
 245:
            if(!(oscard != report)) { _fun00002_ip = 1254; continue _fun00001 }
 252:
            zuuluu = {};
            verify = option.application;
            verify = verify.name;
            report['name'] = verify;
            verify = option.application;
            verify = verify.id;
            report['application_id'] = verify;
            offset = option.transport;
            verify = _closure1_slot3;
            verify = verify.POST_MESSAGE;
            yankee = offset === verify;
            offset = _closure1_slot4;
            if(yankee) { _fun00002_ip = 321; continue _fun00001 }
 313:
            verify = offset.DESKTOP;
            _fun00002_ip = 327; continue _fun00001;
 321:
            verify = offset.EMBEDDED;
 327:
            report['platform'] = verify;
            offset = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 6;
            verify = romeon[verify];
            offset = offset.bind(tangon)(verify);
            verify = offset.computeActivityFlags;
            verify = verify.bind(offset)(report, yankee);
            kiloes = 0;
            if(!(verify > kiloes)) { _fun00002_ip = 377; continue _fun00001 }
 371:
            report['flags'] = verify;
 377:
            verify = delete report.instance;
            verify = report.party;
            if(!(oscard != verify)) { _fun00002_ip = 397; continue _fun00001 }
 392:
            verify = delete verify.privacy;
 397:
            yankee = report.assets;
            _closure2_slot4 = yankee;
            offset = report.party;
            output = report.secrets;
            backup = report.timestamps;
            romeon = report.buttons;
            verify = report.type;
            if(!(oscard == verify)) { _fun00002_ip = 456; continue _fun00001 }
 440:
            verify = _closure1_slot6;
            verify = verify.PLAYING;
            report['type'] = verify;
 456:
            if(!(oscard != output)) { _fun00002_ip = 715; continue _fun00001 }
 463:
            foxtra = _closure1_slot1;
            verify = _closure1_slot2;
            sizing = 7;
            verify = verify[sizing];
            foxtra = foxtra.bind(tangon)(verify);
            verify = foxtra.values;
            output = verify.bind(foxtra)(output);
            foxtra = output.filter;
            verify = function(argFoo) {
                entity = argFoo;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            verify = foxtra.bind(output)(verify);
            if(!(oscard != offset)) { _fun00002_ip = 663; continue _fun00001 }
 517:
            output = _closure1_slot1;
            foxtra = _closure1_slot2;
            foxtra = foxtra[sizing];
            output = output.bind(tangon)(foxtra);
            foxtra = output.intersection;
            result = offset.id;
            offset = new Array(1);
            offset[0] = result;
            offset = foxtra.bind(output)(verify, offset);
            offset = offset.length;
            if(!(offset > kiloes)) { _fun00002_ip = 663; continue _fun00001 }
 568:
            output = _closure1_slot9;
            foxtra = output.includes;
            offset = option.application;
            offset = offset.id;
            offset = foxtra.bind(output)(offset);
            if(offset) { _fun00002_ip = 663; continue _fun00001 }
 595:
            foxtra = _closure1_slot1;
            output = _closure1_slot2;
            offset = 4;
            offset = output[offset];
            result = foxtra.bind(tangon)(offset);
            output = {};
            offset = _closure1_slot8;
            offset = offset.INVALID_ACTIVITY_SECRET;
            output['errorCode'] = offset;
            offset = result.prototype;
            foxtra = Object.create(offset, {constructor: {value: result}});
            source = 'secrets cannot match the party id';
            vacuum = foxtra;
            ctrled = output;
            offset = new vacuum[result](ctrled, source, update);
            offset = offset instanceof Object ? offset : foxtra;
            throw offset;
 663:
            foxtra = _closure1_slot1;
            offset = _closure1_slot2;
            offset = offset[sizing];
            foxtra = foxtra.bind(tangon)(offset);
            offset = foxtra.uniq;
            offset = offset.bind(foxtra)(verify);
            offset = offset.length;
            verify = verify.length;
            if(!(!(offset < verify))) { _fun00002_ip = 1186; continue _fun00001 }
 708:
            if(!(oscard == romeon)) { _fun00002_ip = 1118; continue _fun00001 }
 715:
            if(!(oscard != romeon)) { _fun00002_ip = 765; continue _fun00001 }
 719:
            offset = romeon.map;
            verify = function(argFoo) {
                entity = argFoo;
                entity = entity.url;
                return entity;
            };
            verify = offset.bind(romeon)(verify);
            zuuluu['button_urls'] = verify;
            offset = romeon.map;
            verify = function(argFoo) {
                entity = argFoo;
                entity = entity.label;
                return entity;
            };
            verify = offset.bind(romeon)(verify);
            report['buttons'] = verify;
 765:
            report['metadata'] = zuuluu;
            if(!(oscard != backup)) { _fun00002_ip = 948; continue _fun00001 }
 778:
            foxtra = global;
            verify = foxtra.Object;
            zuuluu = verify.keys;
            romeon = zuuluu.bind(verify)(backup);
            zuuluu = romeon.length;
            zuuluu = kiloes < zuuluu;
            offset = 8;
            verify = 2;
            kiloes = 0;
            if(!zuuluu) { _fun00002_ip = 948; continue _fun00001 }
 819:
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
            if(!(zuuluu > verify)) { _fun00002_ip = 936; continue _fun00001 }
 878:
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
 936:
            kiloes = kiloes + 1;
            zuuluu = romeon.length;
            if(kiloes < zuuluu) { _fun00002_ip = 819; continue _fun00001 }
 948:
            if(!(oscard != yankee)) { _fun00002_ip = 1076; continue _fun00001 }
 955:
            zuuluu = option.application;
            if(!(oscard != zuuluu)) { _fun00002_ip = 1046; continue _fun00001 }
 964:
            zuuluu = option.application;
            zuuluu = zuuluu.id;
            if(!(oscard != zuuluu)) { _fun00002_ip = 1046; continue _fun00001 }
 978:
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 9;
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
            _fun00002_ip = 1099; continue _fun00001;
 1046:
            zuuluu = global;
            zuuluu = zuuluu.Error;
            verify = zuuluu.prototype;
            verify = Object.create(verify, {constructor: {value: zuuluu}});
            vacuum = verify;
            zuuluu = new vacuum[zuuluu](ctrled);
            zuuluu = zuuluu instanceof Object ? zuuluu : verify;
            throw zuuluu;
 1076:
            zuuluu = global;
            offset = zuuluu.Promise;
            verify = offset.resolve;
            zuuluu = new Array(0);
            oscard = verify.bind(offset)(zuuluu);
 1099:
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
                    zuuluu = 5;
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
                    zuuluu = 10;
                    zuuluu = golfie[zuuluu];
                    tangon = tangon.bind(oscard)(zuuluu);
                    zuuluu = tangon.track;
                    michal = _closure1_slot7;
                    michal = michal.ACTIVITY_UPDATED;
                    michal = zuuluu.bind(tangon)(michal, report);
                    entity = _closure2_slot2;
                    return entity;
                }
            };
            michal = zuuluu.bind(oscard)(michal);
            return michal;
 1118:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 4;
            michal = oscard[michal];
            verify = zuuluu.bind(tangon)(michal);
            oscard = {};
            michal = _closure1_slot8;
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
 1186:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 4;
            michal = oscard[michal];
            verify = zuuluu.bind(tangon)(michal);
            oscard = {};
            michal = _closure1_slot8;
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
 1254:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 5;
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
 1335:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 4;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = {};
            entity = _closure1_slot8;
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
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/commands/setActivity.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();
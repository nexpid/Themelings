// app/modules/rpc/native/server/commands/activities.tsx
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
    michal = report.bind(entity)(michal);
    romeon = michal.RPC_AUTHENTICATED_SCOPE;
    foxtra = michal.RPC_LOCAL_SCOPE;
    yankee = michal.RPC_SCOPE_CONFIG;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.InstantInviteSources;
    var _closure1_slot4 = tangon;
    tangon = michal.RPCCommands;
    michal = michal.RPCErrors;
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.NativePermissionTypes;
    var _closure1_slot6 = michal;
    michal = {};
    verify = tangon.OPEN_INVITE_DIALOG;
    golfie = {};
    backup = {};
    sizing = yankee.ANY;
    offset = 4;
    kiloes = oscard[offset];
    kiloes = report.bind(entity)(kiloes);
    kiloes = kiloes.OAuth2Scopes;
    output = kiloes.RPC;
    kiloes = new Array(3);
    kiloes[0] = output;
    kiloes[1] = foxtra;
    kiloes[2] = romeon;
    backup[sizing] = kiloes;
    golfie['scope'] = backup;
    backup = function(argFoo) { // Original name: handler
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golfie = entity.socket;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 5;
            zuuluu = report[entity];
            entity = undefined;
            oscard = tangon.bind(entity)(zuuluu);
            zuuluu = oscard.validateOpenInviteDialog;
            zuuluu = zuuluu.bind(oscard)();
            oscard = zuuluu.channel;
            zuuluu = 6;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.showInstantInviteActionSheet;
            michal = _closure1_slot4;
            zuuluu = michal.ACTIVITY_INVITE;
            michal = {};
            golfie = golfie.application;
            option = golfie.id;
            golfie = null;
            verify = golfie != option;
            golfie = undefined;
            if(!verify) { _fun00002_ip = 103; continue _fun00001 }
 100:
            golfie = option;
 103:
            michal['targetApplicationId'] = golfie;
            michal = tangon.bind(report)(oscard, zuuluu, michal);
            return entity;
        }
    };
    golfie['handler'] = backup;
    michal[verify] = golfie;
    golfie = tangon.INITIATE_IMAGE_UPLOAD;
    tangon = {};
    verify = {};
    yankee = yankee.ANY;
    offset = oscard[offset];
    offset = report.bind(entity)(offset);
    offset = offset.OAuth2Scopes;
    backup = offset.RPC;
    offset = new Array(3);
    offset[0] = backup;
    offset[1] = foxtra;
    offset[2] = romeon;
    verify[yankee] = offset;
    tangon['scope'] = verify;
    option = function(argFoo) { // Original name: handler
        michal = argFoo;
        michal = michal.socket;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 738; continue _fun00003 }
 10:
                    michal = _closure2_slot0;
                    michal = michal.application;
                    yankee = michal.id;
                    option = null;
                    if(!(option != yankee)) { _fun00004_ip = 665; continue _fun00003 }
 36:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 8;
                    zuuluu = report[zuuluu];
                    report = undefined;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = zuuluu.bind(report)();
                    tangon = option == zuuluu;
                    offset = undefined;
                    if(tangon) { _fun00004_ip = 79; continue _fun00003 }
 74:
                    offset = zuuluu.id;
 79:
                    if(!(option != offset)) { _fun00004_ip = 597; continue _fun00003 }
 86:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 9;
                    zuuluu = oscard[zuuluu];
                    oscard = tangon.bind(report)(zuuluu);
                    tangon = oscard.requestPermission;
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.PHOTOS;
                    oscard = tangon.bind(oscard)(zuuluu);
                    tangon = oscard.catch;
                    zuuluu = function() {
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        michal = 7;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        tangon = tangon.bind(michal)(zuuluu);
                        zuuluu = {};
                        entity = _closure1_slot5;
                        entity = entity.UNKNOWN_ERROR;
                        zuuluu['errorCode'] = entity;
                        entity = tangon.prototype;
                        michal = Object.create(entity, {constructor: {value: tangon}});
                        report = 'Failed requesting photo permissions';
                        golfie = michal;
                        oscard = zuuluu;
                        entity = new golfie[tangon](oscard, report, tangon);
                        entity = entity instanceof Object ? entity : michal;
                        throw entity;
                    };
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    SaveGenerator(address=151);
 149:
                    return zuuluu;
 151:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 594; continue _fun00003 }
 160:
                    if(zuuluu) { _fun00004_ip = 231; continue _fun00003 }
 163:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 7;
                    tangon = golfie[tangon];
                    verify = oscard.bind(report)(tangon);
                    golfie = {};
                    tangon = _closure1_slot5;
                    tangon = tangon.UNKNOWN_ERROR;
                    golfie['errorCode'] = tangon;
                    tangon = verify.prototype;
                    oscard = Object.create(tangon, {constructor: {value: verify}});
                    kiloes = 'Missing photo permissions';
                    output = oscard;
                    sizing = golfie;
                    tangon = new output[verify](sizing, kiloes, backup);
                    tangon = tangon instanceof Object ? tangon : oscard;
                    throw tangon;
 231:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 10;
                    tangon = golfie[tangon];
                    golfie = oscard.bind(report)(tangon);
                    oscard = golfie.launchImageLibrary;
                    tangon = {'mediaType': 'photo', 'includeBase64': false, 'presentationStyle': 'pageSheet', 'selectionLimit': 1};
                    tangon = oscard.bind(golfie)(tangon);
                    SaveGenerator(address=280);
 278:
                    return tangon;
 280:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 591; continue _fun00003 }
 289:
                    golfie = tangon.assets;
                    oscard = 0;
                    romeon = golfie[oscard];
                    if(!(option != romeon)) { _fun00004_ip = 523; continue _fun00003 }
 308:
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscard = 11;
                    oscard = verify[oscard];
                    verify = golfie.bind(report)(oscard);
                    golfie = verify.uploadImageAttachment;
                    oscard = {};
                    foxtra = romeon.fileName;
                    oscard['name'] = foxtra;
                    foxtra = romeon.type;
                    oscard['type'] = foxtra;
                    romeon = romeon.uri;
                    oscard['uri'] = romeon;
                    oscard = golfie.bind(verify)(yankee, offset, oscard);
                    SaveGenerator(address=375);
 373:
                    return oscard;
 375:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golfie) { _fun00004_ip = 520; continue _fun00003 }
 384:
                    if(!(option != oscard)) { _fun00004_ip = 439; continue _fun00003 }
 388:
                    golfie = oscard.url;
                    if(!(option != golfie)) { _fun00004_ip = 439; continue _fun00003 }
 397:
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    golfie = 12;
                    golfie = verify[golfie];
                    golfie = option.bind(report)(golfie);
                    golfie = oscard instanceof golfie;
                    if(golfie) { _fun00004_ip = 439; continue _fun00003 }
 424:
                    golfie = {};
                    option = oscard.url;
                    golfie['image_url'] = option;
                    return golfie;
 439:
                    option = _closure1_slot1;
                    verify = _closure1_slot2;
                    golfie = 7;
                    golfie = verify[golfie];
                    offset = option.bind(report)(golfie);
                    verify = {};
                    golfie = _closure1_slot5;
                    golfie = golfie.UNKNOWN_ERROR;
                    verify['errorCode'] = golfie;
                    golfie = global;
                    option = golfie.JSON;
                    golfie = option.stringify;
                    kiloes = golfie.bind(option)(oscard);
                    option = offset.prototype;
                    option = Object.create(option, {constructor: {value: offset}});
                    output = option;
                    sizing = verify;
                    golfie = new output[offset](sizing, kiloes, backup);
                    golfie = golfie instanceof Object ? golfie : option;
                    throw golfie;
 520:
                    return oscard;
 523:
                    golfie = _closure1_slot1;
                    option = _closure1_slot2;
                    oscard = 7;
                    oscard = option[oscard];
                    verify = golfie.bind(report)(oscard);
                    option = {};
                    oscard = _closure1_slot5;
                    oscard = oscard.UNKNOWN_ERROR;
                    option['errorCode'] = oscard;
                    oscard = verify.prototype;
                    golfie = Object.create(oscard, {constructor: {value: verify}});
                    kiloes = 'No image selected';
                    output = golfie;
                    sizing = option;
                    oscard = new output[verify](sizing, kiloes, backup);
                    oscard = oscard instanceof Object ? oscard : golfie;
                    throw oscard;
 591:
                    return tangon;
 594:
                    return zuuluu;
 597:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = {};
                    michal = _closure1_slot5;
                    michal = michal.UNKNOWN_ERROR;
                    tangon['errorCode'] = michal;
                    michal = report.prototype;
                    zuuluu = Object.create(michal, {constructor: {value: report}});
                    kiloes = 'Unable to find selected channel';
                    output = zuuluu;
                    sizing = tangon;
                    michal = new output[report](sizing, kiloes, backup);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 665:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 7;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = {};
                    michal = _closure1_slot5;
                    michal = michal.INVALID_COMMAND;
                    tangon['errorCode'] = michal;
                    michal = report.prototype;
                    zuuluu = Object.create(michal, {constructor: {value: report}});
                    kiloes = 'No application.';
                    output = zuuluu;
                    sizing = tangon;
                    michal = new output[report](sizing, kiloes, backup);
                    michal = michal instanceof Object ? michal : zuuluu;
                    throw michal;
 738:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    tangon['handler'] = option;
    michal[golfie] = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/native/server/commands/activities.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();
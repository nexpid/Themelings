// app/modules/rpc/server/commands/soundboard.tsx
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
    michal = tangon.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    kiloes = michal.RPC_LOCAL_SCOPE;
    offset = michal.RPC_SCOPE_CONFIG;
    michal = 4;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    tangon = michal.RPCCommands;
    michal = michal.RPCErrors;
    var _closure1_slot6 = michal;
    michal = {};
    verify = tangon.GET_SOUNDBOARD_SOUNDS;
    golfie = {};
    yankee = {};
    backup = offset.ANY;
    romeon = 5;
    foxtra = oscard[romeon];
    foxtra = report.bind(entity)(foxtra);
    foxtra = foxtra.OAuth2Scopes;
    sizing = foxtra.RPC;
    foxtra = new Array(2);
    foxtra[0] = sizing;
    foxtra[1] = kiloes;
    yankee[backup] = foxtra;
    golfie['scope'] = yankee;
    yankee = function() { // Original name: handler
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 103; continue _fun00001 }
 9:
                    oscard = undefined;
                    var _closure4_slot0 = oscard;
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 6;
                    michal = golfie[michal];
                    report = report.bind(oscard)(michal);
                    michal = report.maybeFetchSoundboardSounds;
                    michal = michal.bind(report)();
                    SaveGenerator(address=52);
 50:
                    return michal;
 52:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 100; continue _fun00001 }
 58:
                    report = _closure1_slot4;
                    zuuluu = report.getSounds;
                    oscard = zuuluu.bind(report)();
                    zuuluu = new Array(0);
                    _closure4_slot0 = zuuluu;
                    report = oscard.forEach;
                    tangon = function(argFoo) {
                        zuuluu = argFoo;
                        michal = zuuluu.forEach;
                        entity = function(argFoo) {
                            zuuluu = _closure4_slot0;
                            michal = zuuluu.push;
                            report = _closure1_slot0;
                            tangon = _closure1_slot2;
                            entity = 7;
                            tangon = tangon[entity];
                            entity = undefined;
                            report = report.bind(entity)(tangon);
                            tangon = report.soundboardSoundToAPI;
                            entity = argFoo;
                            entity = tangon.bind(report)(entity);
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 100:
                    return michal;
 103:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    golfie['handler'] = yankee;
    michal[verify] = golfie;
    golfie = tangon.PLAY_SOUNDBOARD_SOUND;
    tangon = {};
    verify = {};
    yankee = offset.ALL;
    offset = oscard[romeon];
    offset = report.bind(entity)(offset);
    offset = offset.OAuth2Scopes;
    foxtra = offset.RPC;
    offset = new Array(2);
    offset[0] = foxtra;
    romeon = oscard[romeon];
    romeon = report.bind(entity)(romeon);
    romeon = romeon.OAuth2Scopes;
    romeon = romeon.RPC_VOICE_WRITE;
    offset[1] = romeon;
    verify[yankee] = offset;
    tangon['scope'] = verify;
    verify = function(argFoo) { // Original name: validation
        report = argFoo;
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 8;
        entity = michal[entity];
        michal = undefined;
        entity = zuuluu.bind(michal)(entity);
        michal = entity.bind(michal)(report);
        entity = michal.required;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.keys;
        entity = {};
        tangon = report.string;
        tangon = tangon.bind(report)();
        entity['guild_id'] = tangon;
        tangon = report.string;
        tangon = tangon.bind(report)();
        entity['sound_id'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon['validation'] = verify;
    option = function(argFoo) { // Original name: handler
        michal = argFoo;
        michal = michal.args;
        zuuluu = michal.guild_id;
        var _closure2_slot0 = zuuluu;
        michal = michal.sound_id;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 483; continue _fun00003 }
 10:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 6;
                    michal = report[michal];
                    oscard = undefined;
                    tangon = tangon.bind(oscard)(michal);
                    michal = tangon.maybeFetchSoundboardSounds;
                    michal = michal.bind(tangon)();
                    SaveGenerator(address=49);
 47:
                    return michal;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 480; continue _fun00003 }
 58:
                    report = _closure1_slot5;
                    tangon = report.getCurrentUser;
                    yankee = tangon.bind(report)();
                    option = _closure1_slot4;
                    golfie = option.getSound;
                    report = _closure2_slot0;
                    tangon = _closure2_slot1;
                    verify = golfie.bind(option)(report, tangon);
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 9;
                    tangon = golfie[tangon];
                    tangon = report.bind(oscard)(tangon);
                    tangon = tangon.bind(oscard)();
                    report = null;
                    golfie = report != verify;
                    if(!golfie) { _fun00004_ip = 135; continue _fun00003 }
 131:
                    golfie = report != yankee;
 135:
                    if(!golfie) { _fun00004_ip = 171; continue _fun00003 }
 138:
                    offset = _closure1_slot0;
                    romeon = _closure1_slot2;
                    option = 10;
                    option = romeon[option];
                    offset = offset.bind(oscard)(option);
                    option = offset.canUseSoundboardSound;
                    golfie = option.bind(offset)(yankee, verify, tangon);
 171:
                    if(!(report != tangon)) { _fun00004_ip = 412; continue _fun00003 }
 178:
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    if(golfie) { _fun00004_ip = 249; continue _fun00003 }
 189:
                    golfie = 11;
                    golfie = offset[golfie];
                    foxtra = option.bind(oscard)(golfie);
                    romeon = {};
                    golfie = _closure1_slot6;
                    golfie = golfie.INVALID_SOUND;
                    romeon['errorCode'] = golfie;
                    golfie = foxtra.prototype;
                    yankee = Object.create(golfie, {constructor: {value: foxtra}});
                    kiloes = 'Invalid Sound.';
                    output = yankee;
                    sizing = romeon;
                    golfie = new output[foxtra](sizing, kiloes, backup);
                    golfie = golfie instanceof Object ? golfie : yankee;
                    throw golfie;
 249:
                    golfie = 12;
                    golfie = offset[golfie];
                    golfie = option.bind(oscard)(golfie);
                    golfie = golfie.bind(oscard)(tangon);
                    if(golfie) { _fun00004_ip = 337; continue _fun00003 }
 269:
                    option = _closure1_slot1;
                    offset = _closure1_slot2;
                    golfie = 11;
                    golfie = offset[golfie];
                    yankee = option.bind(oscard)(golfie);
                    offset = {};
                    golfie = _closure1_slot6;
                    golfie = golfie.INVALID_PERMISSIONS;
                    offset['errorCode'] = golfie;
                    golfie = yankee.prototype;
                    option = Object.create(golfie, {constructor: {value: yankee}});
                    kiloes = 'Invalid Permissions.';
                    output = option;
                    sizing = offset;
                    golfie = new output[yankee](sizing, kiloes, backup);
                    golfie = golfie instanceof Object ? golfie : option;
                    throw golfie;
 337:
                    if(!(report != verify)) { _fun00004_ip = 409; continue _fun00003 }
 341:
                    golfie = _closure1_slot0;
                    yankee = _closure1_slot2;
                    report = 10;
                    report = yankee[report];
                    option = golfie.bind(oscard)(report);
                    golfie = option.playSound;
                    report = tangon.id;
                    offset = _closure1_slot1;
                    tangon = 13;
                    tangon = yankee[tangon];
                    tangon = offset.bind(oscard)(tangon);
                    offset = tangon.RPC;
                    tangon = new Array(1);
                    tangon[0] = offset;
                    tangon = golfie.bind(option)(verify, report, tangon);
 409:
                    return oscard;
 412:
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 11;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = {};
                    zuuluu = _closure1_slot6;
                    zuuluu = zuuluu.INVALID_CHANNEL;
                    report['errorCode'] = zuuluu;
                    zuuluu = oscard.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: oscard}});
                    kiloes = 'Invalid Channel.';
                    output = tangon;
                    sizing = report;
                    zuuluu = new output[oscard](sizing, kiloes, backup);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 480:
                    return michal;
 483:
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
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/commands/soundboard.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();
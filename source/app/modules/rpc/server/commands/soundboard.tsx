// app/modules/rpc/server/commands/soundboard.tsx
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
    mike = tango.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    kilo = mike.RPC_LOCAL_SCOPE;
    offset = mike.RPC_SCOPE_CONFIG;
    mike = 4;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    tango = mike.RPCCommands;
    mike = mike.RPCErrors;
    var _closure1_slot6 = mike;
    mike = {};
    verify = tango.GET_SOUNDBOARD_SOUNDS;
    golf = {};
    yankee = {};
    backup = offset.ANY;
    romeo = 5;
    foxtrot = oscar[romeo];
    foxtrot = report.bind(entity)(foxtrot);
    foxtrot = foxtrot.OAuth2Scopes;
    sizing = foxtrot.RPC;
    foxtrot = new Array(2);
    foxtrot[0] = sizing;
    foxtrot[1] = kilo;
    yankee[backup] = foxtrot;
    golf['scope'] = yankee;
    yankee = function() { // Original name: handler
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun109820: for(var _fun109820_ip = 0; ; ) switch(_fun109820_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun109820_ip = 103; continue _fun109820 }
 9:
                    oscar = undefined;
                    var _closure4_slot0 = oscar;
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 6;
                    mike = golf[mike];
                    report = report.bind(oscar)(mike);
                    mike = report.maybeFetchSoundboardSounds;
                    mike = mike.bind(report)();
                    SaveGenerator(address=52);
 50:
                    return mike;
 52:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun109820_ip = 100; continue _fun109820 }
 58:
                    report = _closure1_slot4;
                    zulu = report.getSounds;
                    oscar = zulu.bind(report)();
                    zulu = new Array(0);
                    _closure4_slot0 = zulu;
                    report = oscar.forEach;
                    tango = function(argFoo) {
                        zulu = argFoo;
                        mike = zulu.forEach;
                        entity = function(argFoo) {
                            zulu = _closure4_slot0;
                            mike = zulu.push;
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            entity = 7;
                            tango = tango[entity];
                            entity = undefined;
                            report = report.bind(entity)(tango);
                            tango = report.soundboardSoundToAPI;
                            entity = argFoo;
                            entity = tango.bind(report)(entity);
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    tango = report.bind(oscar)(tango);
                    return zulu;
 100:
                    return mike;
 103:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    golf['handler'] = yankee;
    mike[verify] = golf;
    golf = tango.PLAY_SOUNDBOARD_SOUND;
    tango = {};
    verify = {};
    yankee = offset.ALL;
    offset = oscar[romeo];
    offset = report.bind(entity)(offset);
    offset = offset.OAuth2Scopes;
    foxtrot = offset.RPC;
    offset = new Array(2);
    offset[0] = foxtrot;
    romeo = oscar[romeo];
    romeo = report.bind(entity)(romeo);
    romeo = romeo.OAuth2Scopes;
    romeo = romeo.RPC_VOICE_WRITE;
    offset[1] = romeo;
    verify[yankee] = offset;
    tango['scope'] = verify;
    verify = function(argFoo) { // Original name: validation
        report = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 8;
        entity = mike[entity];
        mike = undefined;
        entity = zulu.bind(mike)(entity);
        mike = entity.bind(mike)(report);
        entity = mike.required;
        zulu = entity.bind(mike)();
        mike = zulu.keys;
        entity = {};
        tango = report.string;
        tango = tango.bind(report)();
        entity['guild_id'] = tango;
        tango = report.string;
        tango = tango.bind(report)();
        entity['sound_id'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['validation'] = verify;
    options = function(argFoo) { // Original name: handler
        mike = argFoo;
        mike = mike.args;
        zulu = mike.guild_id;
        var _closure2_slot0 = zulu;
        mike = mike.sound_id;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun109826: for(var _fun109826_ip = 0; ; ) switch(_fun109826_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun109826_ip = 483; continue _fun109826 }
 10:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 6;
                    mike = report[mike];
                    oscar = undefined;
                    tango = tango.bind(oscar)(mike);
                    mike = tango.maybeFetchSoundboardSounds;
                    mike = mike.bind(tango)();
                    SaveGenerator(address=49);
 47:
                    return mike;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun109826_ip = 480; continue _fun109826 }
 58:
                    report = _closure1_slot5;
                    tango = report.getCurrentUser;
                    yankee = tango.bind(report)();
                    options = _closure1_slot4;
                    golf = options.getSound;
                    report = _closure2_slot0;
                    tango = _closure2_slot1;
                    verify = golf.bind(options)(report, tango);
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 9;
                    tango = golf[tango];
                    tango = report.bind(oscar)(tango);
                    tango = tango.bind(oscar)();
                    report = null;
                    golf = report != verify;
                    if(!golf) { _fun109826_ip = 135; continue _fun109826 }
 131:
                    golf = report != yankee;
 135:
                    if(!golf) { _fun109826_ip = 171; continue _fun109826 }
 138:
                    offset = _closure1_slot0;
                    romeo = _closure1_slot2;
                    options = 10;
                    options = romeo[options];
                    offset = offset.bind(oscar)(options);
                    options = offset.canUseSoundboardSound;
                    golf = options.bind(offset)(yankee, verify, tango);
 171:
                    if(!(report != tango)) { _fun109826_ip = 412; continue _fun109826 }
 178:
                    options = _closure1_slot1;
                    offset = _closure1_slot2;
                    if(golf) { _fun109826_ip = 249; continue _fun109826 }
 189:
                    golf = 11;
                    golf = offset[golf];
                    foxtrot = options.bind(oscar)(golf);
                    romeo = {};
                    golf = _closure1_slot6;
                    golf = golf.INVALID_SOUND;
                    romeo['errorCode'] = golf;
                    golf = foxtrot.prototype;
                    yankee = Object.create(golf, {constructor: {value: foxtrot}});
                    kilo = 'Invalid Sound.';
                    output = yankee;
                    sizing = romeo;
                    golf = new output[foxtrot](sizing, kilo, backup);
                    golf = golf instanceof Object ? golf : yankee;
                    throw golf;
 249:
                    golf = 12;
                    golf = offset[golf];
                    golf = options.bind(oscar)(golf);
                    golf = golf.bind(oscar)(tango);
                    if(golf) { _fun109826_ip = 337; continue _fun109826 }
 269:
                    options = _closure1_slot1;
                    offset = _closure1_slot2;
                    golf = 11;
                    golf = offset[golf];
                    yankee = options.bind(oscar)(golf);
                    offset = {};
                    golf = _closure1_slot6;
                    golf = golf.INVALID_PERMISSIONS;
                    offset['errorCode'] = golf;
                    golf = yankee.prototype;
                    options = Object.create(golf, {constructor: {value: yankee}});
                    kilo = 'Invalid Permissions.';
                    output = options;
                    sizing = offset;
                    golf = new output[yankee](sizing, kilo, backup);
                    golf = golf instanceof Object ? golf : options;
                    throw golf;
 337:
                    if(!(report != verify)) { _fun109826_ip = 409; continue _fun109826 }
 341:
                    golf = _closure1_slot0;
                    yankee = _closure1_slot2;
                    report = 10;
                    report = yankee[report];
                    options = golf.bind(oscar)(report);
                    golf = options.playSound;
                    report = tango.id;
                    offset = _closure1_slot1;
                    tango = 13;
                    tango = yankee[tango];
                    tango = offset.bind(oscar)(tango);
                    offset = tango.RPC;
                    tango = new Array(1);
                    tango[0] = offset;
                    tango = golf.bind(options)(verify, report, tango);
 409:
                    return oscar;
 412:
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 11;
                    tango = golf[tango];
                    oscar = report.bind(oscar)(tango);
                    report = {};
                    zulu = _closure1_slot6;
                    zulu = zulu.INVALID_CHANNEL;
                    report['errorCode'] = zulu;
                    zulu = oscar.prototype;
                    tango = Object.create(zulu, {constructor: {value: oscar}});
                    kilo = 'Invalid Channel.';
                    output = tango;
                    sizing = report;
                    zulu = new output[oscar](sizing, kilo, backup);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 480:
                    return mike;
 483:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    tango['handler'] = options;
    mike[golf] = tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/commands/soundboard.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
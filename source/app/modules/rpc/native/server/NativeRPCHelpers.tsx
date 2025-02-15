// app/modules/rpc/native/server/NativeRPCHelpers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    report = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golf;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.TransportTypes;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.RPCCloseCodes;
    var _closure1_slot5 = tango;
    tango = function() {
        tango = _closure1_slot3;
        zulu = undefined;
        mike = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun74804: for(var _fun74804_ip = 0; ; ) switch(_fun74804_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    options = argBar;
                    oscar = argBaz;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun74804_ip = 245; continue _fun74804 }
 19:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    offset = 3;
                    zulu = zulu[offset];
                    golf = undefined;
                    tango = tango.bind(golf)(zulu);
                    zulu = tango.validateOriginAndUpdateSocket;
                    zulu = zulu.bind(tango)(verify, options);
                    zulu = null;
                    if(!(zulu != oscar)) { _fun74804_ip = 157; continue _fun74804 }
 62:
                    yankee = verify.transport;
                    zulu = _closure1_slot4;
                    zulu = zulu.POST_MESSAGE;
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[offset];
                    report = report.bind(golf)(tango);
                    tango = report.processSocketThrottlers;
                    zulu = yankee !== zulu;
                    zulu = tango.bind(report)(oscar, zulu);
                    SaveGenerator(address=115);
 113:
                    return zulu;
 115:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun74804_ip = 154; continue _fun74804 }
 121:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    tango = tango[offset];
                    report = report.bind(golf)(tango);
                    tango = report.validateSocketApplication;
                    tango = tango.bind(report)(verify, oscar, options);
                    return tango;
 154:
                    return zulu;
 157:
                    zulu = global;
                    tango = zulu.Promise;
                    zulu = tango.reject;
                    oscar = _closure1_slot1;
                    options = _closure1_slot2;
                    report = 4;
                    report = options[report];
                    golf = oscar.bind(golf)(report);
                    oscar = {};
                    mike = _closure1_slot5;
                    mike = mike.INVALID_CLIENTID;
                    oscar['closeCode'] = mike;
                    mike = golf.prototype;
                    report = Object.create(mike, {constructor: {value: golf}});
                    foxtrot = 'No Client ID Specified';
                    kilo = report;
                    backup = oscar;
                    mike = new kilo[golf](backup, foxtrot, romeo);
                    mike = mike instanceof Object ? mike : report;
                    mike = zulu.bind(tango)(mike);
                    return mike;
 245:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    tango = tango.bind(entity)();
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/rpc/native/server/NativeRPCHelpers.tsx';
    report = oscar.bind(golf)(report);
    zulu['validateSocketClient'] = tango;
    tango = function() {
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.getDeprecatedVoiceSettingsWithShortcut;
        entity = function() {
            entity = new Array(0);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getDeprecatedVoiceSettings'] = tango;
    mike = function(argFoo) {
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.getVoiceSettingsWithShortcut;
        mike = argFoo;
        entity = function() {
            entity = '';
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['getVoiceSettings'] = mike;
    return entity;
})();
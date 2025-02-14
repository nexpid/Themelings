// app/modules/mobile_web_handoff/MobileWebHandoffUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function() { // Original name: _createHandoffToken
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun81533: for(var _fun81533_ip = 0; ; ) switch(_fun81533_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun81533_ip = 163; continue _fun81533 }
 10:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.post;
                    mike = {'url': null, 'body': null, 'oldFormErrors': true, 'retries': 1, 'rejectWithError': false};
                    report = _closure1_slot3;
                    report = report.HANDOFF;
                    mike['url'] = report;
                    report = {};
                    oscar = argFoo;
                    report['key'] = oscar;
                    mike['body'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=96);
 94:
                    return mike;
 96:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun81533_ip = 160; continue _fun81533 }
 102:
                    zulu = mike.body;
                    zulu = zulu.handoff_token;
                    tango = null;
                    if(!(tango == zulu)) { _fun81533_ip = 157; continue _fun81533 }
 121:
                    tango = global;
                    oscar = tango.Error;
                    tango = oscar.prototype;
                    report = Object.create(tango, {constructor: {value: oscar}});
                    golf = 'Missing handoff token!';
                    options = report;
                    tango = new options[oscar](golf, oscar);
                    tango = tango instanceof Object ? tango : report;
                    throw tango;
 157:
                    return zulu;
 160:
                    return mike;
 163:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot4 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    golf = oscar[entity];
    mike = argBaz;
    entity = undefined;
    mike = mike.bind(entity)(golf);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot3 = mike;
    mike = {};
    golf = function() { // Original name: generateNonce
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        mike = zulu.bind(entity)(mike);
        entity = mike.v4;
        entity = entity.bind(mike)();
        return entity;
    };
    mike['generateNonce'] = golf;
    tango = function() { // Original name: createHandoffToken
        entity = undefined;
        tango = _closure1_slot4;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    mike['createHandoffToken'] = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/mobile_web_handoff/MobileWebHandoffUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
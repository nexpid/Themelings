// app/modules/feedback/native/requestReviewModal.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _showAndroidRatingRequest
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun98738: for(var _fun98738_ip = 0; ; ) switch(_fun98738_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun98738_ip = 138; continue _fun98738 }
 10: // try_start_0
                    tango = _closure1_slot1;
                    mike = _closure1_slot2;
                    oscar = 3;
                    mike = mike[oscar];
                    report = undefined;
                    tango = tango.bind(report)(mike);
                    mike = null;
                    tango = mike == tango;
                    mike = undefined;
                    if(tango) { _fun98738_ip = 75; continue _fun98738 }
 46:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[oscar];
                    tango = tango.bind(report)(zulu);
                    zulu = tango.requestRating;
                    mike = zulu.bind(tango)();
 75:
                    SaveGenerator(address=79);
 77:
                    return mike;
 79:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun98738_ip = 87; continue _fun98738 }
 85: // try_end0
                    _fun98738_ip = 133; continue _fun98738;
 87:
                    return mike;
 90: // catch_target0
                    CatchBlockStart(arg_register=5);
                    tango = _closure1_slot5;
                    zulu = tango.error;
                    mike = global;
                    mike = mike.HermesInternal;
                    report = mike.concat;
                    mike = 'Failed to show Android rating request: ';
                    mike = report.bind(mike)(oscar);
                    mike = zulu.bind(tango)(mike);
 133:
                    mike = undefined;
                    return mike;
 138:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot6 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.Logger;
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'requestReviewModal';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot5 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/feedback/native/requestReviewModal.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: requestReviewModal
        _fun98739: for(var _fun98739_ip = 0; ; ) switch(_fun98739_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 4;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.isAndroid;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun98739_ip = 61; continue _fun98739 }
 37:
            mike = _closure1_slot4;
            zulu = mike.AppStoreManager;
            mike = zulu.requestReview;
            mike = mike.bind(zulu)();
            _fun98739_ip = 74; continue _fun98739;
 61:
            mike = function() { // Original name: showAndroidRatingRequest
                entity = undefined;
                tango = _closure1_slot6;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            mike = mike.bind(entity)();
 74:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();
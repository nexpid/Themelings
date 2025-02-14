// app/modules/premium/promotions/PromotionsManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun124402: for(var _fun124402_ip = 0; ; ) switch(_fun124402_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun124402_ip = 51; continue _fun124402 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun124402_ip = 92; continue _fun124402;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun124402_ip = 71; continue _fun124402 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun124403: for(var _fun124403_ip = 0; ; ) switch(_fun124403_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun124403_ip = 76; continue _fun124403;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PremiumTypes;
    var _closure1_slot9 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: PromotionsManager
            report = this;
            offset = 0;
            oscar = copyRestArgs(offset);
            mike = _closure1_slot3;
            tango = _closure2_slot0;
            zulu = undefined;
            mike = mike.bind(zulu)(report, tango);
            mike = _closure1_slot10;
            entity = new Array(0);
            offset = entity;
            verify = oscar;
            options = 0;
            oscar = arraySpread(offset, verify, options);
            entity = mike.bind(zulu)(report, tango, entity);
            mike = {};
            tango = entity.onPostConnectionOpen;
            zulu = tango.bind;
            zulu = zulu.bind(tango)(entity);
            mike['POST_CONNECTION_OPEN'] = zulu;
            tango = entity.onPostConnectionOpen;
            zulu = tango.bind;
            zulu = zulu.bind(tango)(entity);
            mike['EXPERIMENTS_FETCH_SUCCESS'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'onPostConnectionOpen';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = this;
            entity = mike.maybeFetchActiveOutboundPromotions;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'maybeFetchActiveOutboundPromotions';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun124409: for(var _fun124409_ip = 0; ; ) switch(_fun124409_ip) {
 0:
                zulu = _closure1_slot8;
                entity = zulu.getCurrentUser;
                golf = entity.bind(zulu)();
                tango = _closure1_slot1;
                oscar = _closure1_slot2;
                entity = 7;
                zulu = oscar[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.isPremiumExactly;
                zulu = _closure1_slot9;
                zulu = zulu.TIER_2;
                zulu = tango.bind(report)(golf, zulu);
                report = _closure1_slot0;
                tango = 8;
                tango = oscar[tango];
                tango = report.bind(entity)(tango);
                golf = tango.OutboundPromoDesktopUpsellExperiment;
                oscar = golf.getCurrentConfig;
                report = {};
                tango = 'maybeFetchActiveOutboundPromotions';
                report['location'] = tango;
                tango = {};
                options = false;
                tango['autoTrackExposure'] = options;
                tango['disable'] = zulu;
                tango = oscar.bind(golf)(report, tango);
                tango = tango.enabled;
                if(zulu) { _fun124409_ip = 131; continue _fun124409 }
 128:
                zulu = tango;
 131:
                if(!zulu) { _fun124409_ip = 164; continue _fun124409 }
 134:
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 9;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.fetchActiveOutboundPromotions;
                mike = mike.bind(zulu)();
 164:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/promotions/PromotionsManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
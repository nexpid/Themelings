// app/modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = {};
    golf = function(argFoo) { // Original name: show
        report = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 1;
        tango = mike[entity];
        entity = undefined;
        oscar = report.bind(entity)(tango);
        report = oscar.openLazy;
        tango = _closure1_slot0;
        zulu = 3;
        zulu = mike[zulu];
        tango = tango.bind(entity)(zulu);
        zulu = 2;
        zulu = mike[zulu];
        mike = mike.paths;
        tango = tango.bind(entity)(zulu, mike);
        zulu = {};
        mike = argFoo;
        zulu['url'] = mike;
        mike = 'blocked-domain';
        mike = report.bind(oscar)(tango, mike, zulu);
        return entity;
    };
    mike['show'] = golf;
    golf = function() { // Original name: getBlockedDomains
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun67305: for(var _fun67305_ip = 0; ; ) switch(_fun67305_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67305_ip = 103; continue _fun67305 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    zulu = zulu[mike];
                    mike = undefined;
                    oscar = tango.bind(mike)(zulu);
                    report = oscar.readFile;
                    tango = 'cache';
                    zulu = 'BlockedDomainsV2';
                    mike = 'utf8';
                    mike = report.bind(oscar)(tango, zulu, mike);
                    SaveGenerator(address=65);
 63:
                    return mike;
 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun67305_ip = 100; continue _fun67305 }
 71:
                    zulu = null;
                    if(!(zulu != mike)) { _fun67305_ip = 93; continue _fun67305 }
 77:
                    tango = mike.split;
                    zulu = '\n';
                    zulu = tango.bind(mike)(zulu);
                    _fun67305_ip = 97; continue _fun67305;
 93:
                    zulu = new Array(0);
 97:
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
    mike['getBlockedDomains'] = golf;
    tango = function(argFoo) { // Original name: saveBlockedDomains
        tango = argFoo;
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        golf = zulu.bind(entity)(mike);
        oscar = golf.writeFile;
        zulu = tango.join;
        mike = '\n';
        verify = zulu.bind(tango)(mike);
        yankee = 'cache';
        offset = 'BlockedDomainsV2';
        options = 'utf8';
        romeo = golf;
        mike = romeo[oscar](yankee, offset, verify, options, golf);
        return entity;
    };
    mike['saveBlockedDomains'] = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
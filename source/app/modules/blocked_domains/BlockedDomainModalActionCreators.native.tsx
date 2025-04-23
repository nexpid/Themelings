// app/modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: show
        report = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 1;
        tangon = michal[entity];
        entity = undefined;
        oscard = report.bind(entity)(tangon);
        report = oscard.openLazy;
        tangon = _closure1_slot0;
        zuuluu = 3;
        zuuluu = michal[zuuluu];
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = 2;
        zuuluu = michal[zuuluu];
        michal = michal.paths;
        tangon = tangon.bind(entity)(zuuluu, michal);
        zuuluu = {};
        michal = argFoo;
        zuuluu['url'] = michal;
        michal = 'blocked-domain';
        michal = report.bind(oscard)(tangon, michal, zuuluu);
        return entity;
    };
    michal['show'] = golfie;
    golfie = function() { // Original name: getBlockedDomains
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 101; continue _fun00001 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    oscard = tangon.bind(michal)(zuuluu);
                    report = oscard.readFile;
                    tangon = 'cache';
                    zuuluu = 'BlockedDomainsV2';
                    michal = 'utf8';
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    SaveGenerator(address=63);
 61:
                    return michal;
 63:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 98; continue _fun00001 }
 69:
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00002_ip = 91; continue _fun00001 }
 75:
                    tangon = michal.split;
                    zuuluu = '\n';
                    zuuluu = tangon.bind(michal)(zuuluu);
                    _fun00002_ip = 95; continue _fun00001;
 91:
                    zuuluu = new Array(0);
 95:
                    return zuuluu;
 98:
                    return michal;
 101:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['getBlockedDomains'] = golfie;
    tangon = function(argFoo) { // Original name: saveBlockedDomains
        tangon = argFoo;
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        golfie = zuuluu.bind(entity)(michal);
        oscard = golfie.writeFile;
        zuuluu = tangon.join;
        michal = '\n';
        verify = zuuluu.bind(tangon)(michal);
        yankee = 'cache';
        offset = 'BlockedDomainsV2';
        option = 'utf8';
        romeon = golfie;
        michal = romeon[oscard](yankee, offset, verify, option, golfie);
        return entity;
    };
    michal['saveBlockedDomains'] = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/blocked_domains/BlockedDomainModalActionCreators.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();
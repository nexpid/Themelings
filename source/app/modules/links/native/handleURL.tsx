// app/modules/links/native/handleURL.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot9;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot9;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: sanitizeURLPart
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            michal = null;
            entity = report;
            if(!(michal != entity)) { _fun00008_ip = 44; continue _fun00007 }
 12:
            tangon = report.replace;
            zuuluu = /[^\x00-\x7F]+/g;
            michal = function(argFoo) {
                entity = global;
                zuuluu = entity.encodeURIComponent;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            entity = tangon.bind(report)(zuuluu, michal);
 44:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _handleURL
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    zuuluu = argFoo;
                    michal = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00010_ip = 468; continue _fun00009 }
 18:
                    option = zuuluu;
                    var _closure4_slot0 = zuuluu;
                    zuuluu = argBar;
                    var _closure4_slot1 = zuuluu;
                    zuuluu = undefined;
                    if(!(michal === zuuluu)) { _fun00010_ip = 40; continue _fun00009 }
 38:
                    michal = {};
 40:
                    report = michal.allowExternal;
                    if(!(report === zuuluu)) { _fun00010_ip = 52; continue _fun00009 }
 50:
                    report = true;
 52:
                    oscard = michal.forceExternalBrowser;
                    if(!(oscard === zuuluu)) { _fun00010_ip = 64; continue _fun00009 }
 62:
                    oscard = false;
 64:
                    var _closure4_slot2 = oscard;
                    SaveGenerator(address=72);
 70:
                    return zuuluu;
 72:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00010_ip = 465; continue _fun00009 }
 81:
                    tangon = function() { // Original name: openInBrowser
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            report = _closure1_slot1;
                            tangon = _closure1_slot2;
                            entity = 9;
                            tangon = tangon[entity];
                            entity = undefined;
                            golfie = report.bind(entity)(tangon);
                            report = golfie.sanitizeUrl;
                            tangon = _closure4_slot0;
                            tangon = report.bind(golfie)(tangon);
                            verify = null;
                            if(!(verify == tangon)) { _fun00012_ip = 134; continue _fun00011 }
 51:
                            yankee = _closure1_slot0;
                            romeon = _closure1_slot2;
                            tangon = 10;
                            tangon = romeon[tangon];
                            golfie = yankee.bind(entity)(tangon);
                            report = golfie.presentFailedToast;
                            tangon = 11;
                            option = romeon[tangon];
                            option = yankee.bind(entity)(option);
                            offset = option.intl;
                            option = offset.string;
                            tangon = romeon[tangon];
                            tangon = yankee.bind(entity)(tangon);
                            tangon = tangon.t;
                            tangon = tangon.XiqzAg;
                            tangon = option.bind(offset)(tangon);
                            tangon = report.bind(golfie)(tangon);
                            _fun00012_ip = 627; continue _fun00011;
 134:
                            tangon = _closure1_slot6;
                            report = tangon.SAFARI;
                            option = _closure4_slot0;
                            golfie = option.startsWith;
                            tangon = 'https:';
                            tangon = golfie.bind(option)(tangon);
                            if(tangon) { _fun00012_ip = 191; continue _fun00011 }
 166:
                            option = _closure4_slot0;
                            golfie = option.startsWith;
                            tangon = 'http:';
                            tangon = golfie.bind(option)(tangon);
                            if(!tangon) { _fun00012_ip = 334; continue _fun00011 }
 191:
                            golfie = _closure1_slot0;
                            option = _closure1_slot2;
                            tangon = 12;
                            tangon = option[tangon];
                            golfie = golfie.bind(entity)(tangon);
                            tangon = golfie.getBrowserManagerSelectedBrowser;
                            tangon = tangon.bind(golfie)();
                            golfie = _closure4_slot1;
                            option = tangon;
                            if(!(verify != golfie)) { _fun00012_ip = 236; continue _fun00011 }
 232:
                            option = _closure4_slot1;
 236:
                            golfie = _closure4_slot2;
                            if(!golfie) { _fun00012_ip = 257; continue _fun00011 }
 243:
                            verify = _closure1_slot6;
                            verify = verify.IN_APP;
                            golfie = option === verify;
 257:
                            report = option;
                            if(!golfie) { _fun00012_ip = 334; continue _fun00011 }
 263:
                            golfie = _closure1_slot6;
                            golfie = golfie.IN_APP;
                            if(!(tangon === golfie)) { _fun00012_ip = 331; continue _fun00011 }
 277:
                            option = _closure1_slot0;
                            verify = _closure1_slot2;
                            golfie = 13;
                            golfie = verify[golfie];
                            option = option.bind(entity)(golfie);
                            golfie = option.isIOS;
                            golfie = golfie.bind(option)();
                            option = _closure1_slot6;
                            if(golfie) { _fun00012_ip = 322; continue _fun00011 }
 314:
                            golfie = option.CHROME;
                            _fun00012_ip = 328; continue _fun00011;
 322:
                            golfie = option.SAFARI;
 328:
                            tangon = golfie;
 331:
                            report = tangon;
 334:
                            tangon = _closure1_slot6;
                            tangon = tangon.IN_APP;
                            if(!(tangon !== report)) { _fun00012_ip = 493; continue _fun00011 }
 351:
                            tangon = _closure1_slot6;
                            tangon = tangon.CHROME;
                            if(!(tangon !== report)) { _fun00012_ip = 426; continue _fun00011 }
 365:
                            tangon = _closure1_slot6;
                            tangon = tangon.SAFARI;
                            report = _closure1_slot0;
                            golfie = _closure1_slot2;
                            tangon = 12;
                            tangon = golfie[tangon];
                            option = report.bind(entity)(tangon);
                            golfie = option.browserManagerOpenUrl;
                            report = _closure4_slot0;
                            tangon = _closure1_slot6;
                            tangon = tangon.SAFARI;
                            tangon = golfie.bind(option)(report, tangon);
                            _fun00012_ip = 627; continue _fun00011;
 426:
                            report = _closure1_slot0;
                            golfie = _closure1_slot2;
                            tangon = 12;
                            tangon = golfie[tangon];
                            option = report.bind(entity)(tangon);
                            golfie = option.browserManagerOpenUrl;
                            report = _closure4_slot0;
                            tangon = _closure1_slot6;
                            tangon = tangon.CHROME;
                            golfie = golfie.bind(option)(report, tangon);
                            report = golfie.catch;
                            tangon = function() {
                                golfie = _closure1_slot0;
                                option = _closure1_slot2;
                                entity = 10;
                                michal = option[entity];
                                entity = undefined;
                                tangon = golfie.bind(entity)(michal);
                                zuuluu = tangon.presentFailedToast;
                                michal = 11;
                                report = option[michal];
                                report = golfie.bind(entity)(report);
                                oscard = report.intl;
                                report = oscard.string;
                                michal = option[michal];
                                michal = golfie.bind(entity)(michal);
                                michal = michal.t;
                                michal = michal.HryVr6;
                                option = report.bind(oscard)(michal);
                                golfie = _closure4_slot0;
                                michal = global;
                                michal = michal.HermesInternal;
                                oscard = michal.concat;
                                report = '';
                                michal = ' ';
                                michal = oscard.bind(report)(option, michal, golfie);
                                michal = zuuluu.bind(tangon)(michal);
                                return entity;
                            };
                            tangon = report.bind(golfie)(tangon);
                            _fun00012_ip = 627; continue _fun00011;
 493:
                            tangon = _closure1_slot0;
                            report = _closure1_slot2;
                            golfie = 12;
                            golfie = report[golfie];
                            verify = tangon.bind(entity)(golfie);
                            option = verify.browserManagerOpenUrl;
                            golfie = _closure4_slot0;
                            oscard = _closure1_slot6;
                            oscard = oscard.IN_APP;
                            golfie = option.bind(verify)(golfie, oscard);
                            oscard = golfie.catch;
                            zuuluu = function() {
                                golfie = _closure1_slot0;
                                option = _closure1_slot2;
                                entity = 10;
                                michal = option[entity];
                                entity = undefined;
                                tangon = golfie.bind(entity)(michal);
                                zuuluu = tangon.presentFailedToast;
                                michal = 11;
                                report = option[michal];
                                report = golfie.bind(entity)(report);
                                oscard = report.intl;
                                report = oscard.string;
                                michal = option[michal];
                                michal = golfie.bind(entity)(michal);
                                michal = michal.t;
                                michal = michal.HryVr6;
                                option = report.bind(oscard)(michal);
                                golfie = _closure4_slot0;
                                michal = global;
                                michal = michal.HermesInternal;
                                oscard = michal.concat;
                                report = '';
                                michal = ' ';
                                michal = oscard.bind(report)(option, michal, golfie);
                                michal = zuuluu.bind(tangon)(michal);
                                return entity;
                            };
                            zuuluu = oscard.bind(golfie)(zuuluu);
                            zuuluu = 13;
                            zuuluu = report[zuuluu];
                            tangon = tangon.bind(entity)(zuuluu);
                            zuuluu = tangon.isIOS;
                            zuuluu = zuuluu.bind(tangon)();
                            if(!zuuluu) { _fun00012_ip = 594; continue _fun00011 }
 580:
                            report = _closure1_slot5;
                            tangon = report.isOpen;
                            zuuluu = tangon.bind(report)();
 594:
                            if(!zuuluu) { _fun00012_ip = 627; continue _fun00011 }
 597:
                            zuuluu = _closure1_slot1;
                            tangon = _closure1_slot2;
                            michal = 14;
                            michal = tangon[michal];
                            zuuluu = zuuluu.bind(entity)(michal);
                            michal = zuuluu.hideActionSheet;
                            michal = michal.bind(zuuluu)();
 627:
                            return entity;
                        }
                    };
                    if(oscard) { _fun00010_ip = 458; continue _fun00009 }
 92:
                    offset = /^[a-zA-Z0-9+-.]+:/;
                    verify = offset.test;
                    oscard = option;
                    oscard = verify.bind(offset)(oscard);
                    if(oscard) { _fun00010_ip = 142; continue _fun00009 }
 122:
                    verify = option;
                    oscard = 'https://';
                    oscard = oscard + verify;
                    option = oscard;
                    _closure4_slot0 = oscard;
 142:
                    offset = /^https?:/i;
                    verify = offset.test;
                    oscard = option;
                    oscard = verify.bind(offset)(oscard);
                    if(!oscard) { _fun00010_ip = 289; continue _fun00009 }
 172: // try_start_0
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    oscard = 15;
                    offset = yankee[oscard];
                    backup = verify.bind(zuuluu)(offset);
                    foxtra = backup.parse;
                    offset = option;
                    offset = foxtra.bind(backup)(offset);
                    foxtra = _closure1_slot10;
                    romeon = offset.pathname;
                    romeon = foxtra.bind(zuuluu)(romeon);
                    offset['pathname'] = romeon;
                    romeon = offset.search;
                    romeon = foxtra.bind(zuuluu)(romeon);
                    offset['search'] = romeon;
                    romeon = offset.hash;
                    romeon = foxtra.bind(zuuluu)(romeon);
                    offset['hash'] = romeon;
                    oscard = yankee[oscard];
                    verify = verify.bind(zuuluu)(oscard);
                    oscard = verify.format;
                    oscard = oscard.bind(verify)(offset);
                    option = oscard;
                    _closure4_slot0 = oscard;
 289: // try_end0
                    verify = _closure1_slot1;
                    yankee = _closure1_slot2;
                    oscard = 16;
                    oscard = yankee[oscard];
                    offset = verify.bind(zuuluu)(oscard);
                    oscard = option;
                    oscard = offset.bind(zuuluu)(oscard);
                    offset = oscard.payload;
                    oscard = 17;
                    oscard = yankee[oscard];
                    verify = verify.bind(zuuluu)(oscard);
                    oscard = {};
                    oscard['payload'] = offset;
                    offset = true;
                    oscard['safe'] = offset;
                    oscard = verify.bind(zuuluu)(oscard);
                    if(oscard) { _fun00010_ip = 462; continue _fun00009 }
 360:
                    if(!report) { _fun00010_ip = 462; continue _fun00009 }
 363:
                    oscard = option;
                    report = function(argFoo) { // Original name: tryHandleUniversalLink
                        michal = argFoo;
                        var _closure5_slot0 = michal;
                        michal = global;
                        zuuluu = michal.Promise;
                        michal = zuuluu.prototype;
                        michal = Object.create(michal, {constructor: {value: zuuluu}});
                        tangon = function(argFoo) {
                            entity = argFoo;
                            var _closure6_slot0 = entity;
                            tangon = _closure1_slot1;
                            zuuluu = _closure1_slot2;
                            entity = 5;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            report = tangon.bind(entity)(zuuluu);
                            tangon = report.tryOpenUrlAsUniversalLink;
                            zuuluu = _closure5_slot0;
                            report = tangon.bind(report)(zuuluu);
                            tangon = report.then;
                            zuuluu = function() {
                                zuuluu = _closure1_slot7;
                                michal = zuuluu.info;
                                entity = 'Universal link opened successfully.';
                                entity = michal.bind(zuuluu)(entity);
                                zuuluu = _closure6_slot0;
                                entity = undefined;
                                michal = true;
                                michal = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            tangon = tangon.bind(report)(zuuluu);
                            zuuluu = tangon.catch;
                            michal = function() {
                                zuuluu = _closure1_slot7;
                                michal = zuuluu.info;
                                entity = 'URL is not a handled universal link.';
                                entity = michal.bind(zuuluu)(entity);
                                zuuluu = _closure6_slot0;
                                entity = undefined;
                                michal = false;
                                michal = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        };
                        report = michal;
                        entity = new report[zuuluu](tangon, zuuluu);
                        entity = entity instanceof Object ? entity : michal;
                        return entity;
                    };
                    report = report.bind(zuuluu)(oscard);
                    SaveGenerator(address=380);
 378:
                    return report;
 380:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscard) { _fun00010_ip = 450; continue _fun00009 }
 386:
                    if(report) { _fun00010_ip = 462; continue _fun00009 }
 389:
                    verify = option;
                    oscard = function(argFoo) { // Original name: tryHandleCustomScheme
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            report = argFoo;
                            var _closure5_slot0 = report;
                            tangon = _closure1_slot8;
                            oscard = _closure1_slot0;
                            golfie = _closure1_slot2;
                            zuuluu = 6;
                            zuuluu = golfie[zuuluu];
                            offset = undefined;
                            zuuluu = oscard.bind(offset)(zuuluu);
                            zuuluu = zuuluu.LINKING_SCHEMAS_VALUES;
                            verify = tangon.bind(offset)(zuuluu);
                            oscard = verify.bind(offset)();
                            zuuluu = oscard.done;
                            tangon = null;
                            option = 1;
                            golfie = report;
                            report = golfie;
                            if(zuuluu) { _fun00014_ip = 152; continue _fun00013 }
 72:
                            zuuluu = oscard.value;
                            yankee = zuuluu.regex;
                            romeon = zuuluu.protocol;
                            zuuluu = yankee.exec;
                            foxtra = zuuluu.bind(yankee)(golfie);
                            backup = tangon == foxtra;
                            yankee = golfie;
                            zuuluu = undefined;
                            if(backup) { _fun00014_ip = 116; continue _fun00013 }
 112:
                            zuuluu = foxtra[option];
 116:
                            if(!(tangon != zuuluu)) { _fun00014_ip = 131; continue _fun00013 }
 120:
                            zuuluu = romeon + zuuluu;
                            _closure5_slot0 = zuuluu;
                            yankee = zuuluu;
 131:
                            romeon = verify.bind(offset)();
                            zuuluu = romeon.done;
                            golfie = yankee;
                            oscard = romeon;
                            report = golfie;
                            if(!zuuluu) { _fun00014_ip = 72; continue _fun00013 }
 152:
                            zuuluu = report.indexOf;
                            oscard = '://';
                            golfie = zuuluu.bind(report)(oscard);
                            zuuluu = -1;
                            tangon = null;
                            if(!(zuuluu !== golfie)) { _fun00014_ip = 196; continue _fun00013 }
 180:
                            zuuluu = report.split;
                            oscard = zuuluu.bind(report)(oscard);
                            zuuluu = 0;
                            tangon = oscard[zuuluu];
 196:
                            zuuluu = 'http';
                            if(!(zuuluu !== tangon)) { _fun00014_ip = 269; continue _fun00013 }
 204:
                            zuuluu = 'https';
                            if(!(zuuluu !== tangon)) { _fun00014_ip = 269; continue _fun00013 }
 212:
                            tangon = _closure1_slot7;
                            zuuluu = tangon.info;
                            entity = 'tryHandleCustomScheme';
                            entity = zuuluu.bind(tangon)(entity, report);
                            entity = global;
                            tangon = entity.Promise;
                            entity = tangon.prototype;
                            zuuluu = Object.create(entity, {constructor: {value: tangon}});
                            sizing = function(argFoo) {
                                entity = argFoo;
                                var _closure6_slot0 = entity;
                                tangon = _closure1_slot1;
                                zuuluu = _closure1_slot2;
                                entity = 5;
                                zuuluu = zuuluu[entity];
                                entity = undefined;
                                report = tangon.bind(entity)(zuuluu);
                                tangon = report.tryOpenScheme;
                                zuuluu = _closure5_slot0;
                                report = tangon.bind(report)(zuuluu);
                                tangon = report.then;
                                zuuluu = function() {
                                    zuuluu = _closure1_slot7;
                                    michal = zuuluu.info;
                                    entity = 'Custom scheme opened successfully.';
                                    entity = michal.bind(zuuluu)(entity);
                                    zuuluu = _closure6_slot0;
                                    entity = undefined;
                                    michal = true;
                                    michal = zuuluu.bind(entity)(michal);
                                    return entity;
                                };
                                tangon = tangon.bind(report)(zuuluu);
                                zuuluu = tangon.catch;
                                michal = function() {
                                    zuuluu = _closure1_slot7;
                                    michal = zuuluu.info;
                                    entity = 'Custom scheme failed to open.';
                                    entity = michal.bind(zuuluu)(entity);
                                    zuuluu = _closure6_slot0;
                                    entity = undefined;
                                    michal = false;
                                    michal = zuuluu.bind(entity)(michal);
                                    return entity;
                                };
                                michal = zuuluu.bind(tangon)(michal);
                                return entity;
                            };
                            output = zuuluu;
                            entity = new output[tangon](sizing, kiloes);
                            entity = entity instanceof Object ? entity : zuuluu;
                            _fun00014_ip = 302; continue _fun00013;
 269:
                            zuuluu = global;
                            tangon = zuuluu.Promise;
                            zuuluu = tangon.prototype;
                            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                            sizing = function(argFoo) {
                                zuuluu = _closure1_slot7;
                                michal = zuuluu.info;
                                entity = 'URL is not a custom scheme.';
                                entity = michal.bind(zuuluu)(entity);
                                zuuluu = argFoo;
                                entity = undefined;
                                michal = false;
                                michal = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            output = zuuluu;
                            michal = new output[tangon](sizing, kiloes);
                            entity = michal instanceof Object ? michal : zuuluu;
 302:
                            return entity;
                        }
                    };
                    oscard = oscard.bind(zuuluu)(verify);
                    SaveGenerator(address=406);
 404:
                    return oscard;
 406:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(verify) { _fun00010_ip = 447; continue _fun00009 }
 412:
                    if(oscard) { _fun00010_ip = 462; continue _fun00009 }
 415:
                    golfie = function(argFoo) { // Original name: tryHandleWhitelistedURL
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            michal = argFoo;
                            var _closure5_slot0 = michal;
                            option = function(argFoo) { // Original name: _loop
                                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                    entity = argFoo;
                                    var _closure6_slot0 = entity;
                                    tangon = _closure5_slot1;
                                    michal = tangon.exec;
                                    entity = _closure5_slot0;
                                    tangon = michal.bind(tangon)(entity);
                                    michal = null;
                                    entity = 0;
                                    if(!(michal !== tangon)) { _fun00018_ip = 81; continue _fun00017 }
 39:
                                    michal = {};
                                    tangon = global;
                                    report = tangon.Promise;
                                    tangon = report.prototype;
                                    tangon = Object.create(tangon, {constructor: {value: report}});
                                    oscard = function(argFoo) {
                                        michal = argFoo;
                                        var _closure7_slot0 = michal;
                                        tangon = _closure1_slot4;
                                        zuuluu = tangon.canOpenURL;
                                        michal = _closure6_slot0;
                                        tangon = zuuluu.bind(tangon)(michal);
                                        zuuluu = tangon.then;
                                        michal = function(argFoo) {
                                            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                                                michal = argFoo;
                                                if(michal) { _fun00020_ip = 48; continue _fun00019 }
 9:
                                                tangon = _closure1_slot7;
                                                zuuluu = tangon.info;
                                                michal = 'Whitelisted URL, but cannot be opened (app likely not installed).';
                                                michal = zuuluu.bind(tangon)(michal);
                                                tangon = _closure7_slot0;
                                                zuuluu = undefined;
                                                michal = false;
                                                michal = tangon.bind(zuuluu)(michal);
                                                _fun00020_ip = 102; continue _fun00019;
 48:
                                                michal = _closure1_slot1;
                                                zuuluu = _closure1_slot2;
                                                entity = 7;
                                                entity = zuuluu[entity];
                                                zuuluu = undefined;
                                                tangon = michal.bind(zuuluu)(entity);
                                                michal = tangon.performURLNavigation;
                                                entity = _closure5_slot0;
                                                entity = michal.bind(tangon)(entity);
                                                michal = _closure7_slot0;
                                                entity = true;
                                                entity = michal.bind(zuuluu)(entity);
 102:
                                                entity = undefined;
                                                return entity;
                                            }
                                        };
                                        zuuluu = zuuluu.bind(tangon)(michal);
                                        michal = zuuluu.catch;
                                        entity = function(argFoo) {
                                            tangon = _closure1_slot7;
                                            zuuluu = tangon.info;
                                            michal = {};
                                            entity = argFoo;
                                            michal['error'] = entity;
                                            entity = 'Whitelisted URL encountered an error.';
                                            entity = zuuluu.bind(tangon)(entity, michal);
                                            zuuluu = _closure7_slot0;
                                            entity = undefined;
                                            michal = false;
                                            michal = zuuluu.bind(entity)(michal);
                                            return entity;
                                        };
                                        entity = michal.bind(zuuluu)(entity);
                                        entity = undefined;
                                        return entity;
                                    };
                                    golfie = tangon;
                                    zuuluu = new golfie[report](oscard, report);
                                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                                    michal['v'] = zuuluu;
                                    entity = michal;
 81:
                                    return entity;
                                }
                            };
                            zuuluu = _closure1_slot8;
                            tangon = _closure1_slot0;
                            report = _closure1_slot2;
                            michal = 8;
                            michal = report[michal];
                            golfie = undefined;
                            michal = tangon.bind(golfie)(michal);
                            michal = michal.LINKING_WHITELIST_VALUES;
                            oscard = zuuluu.bind(golfie)(michal);
                            zuuluu = oscard.bind(golfie)();
                            michal = zuuluu.done;
                            report = 0;
                            tangon = zuuluu;
                            if(michal) { _fun00016_ip = 128; continue _fun00015 }
 71:
                            michal = tangon.value;
                            zuuluu = michal.regex;
                            var _closure5_slot1 = zuuluu;
                            michal = michal.protocol;
                            michal = option.bind(golfie)(michal);
                            if(!(report !== michal)) { _fun00016_ip = 104; continue _fun00015 }
 101:
                            if(michal) { _fun00016_ip = 121; continue _fun00015 }
 104:
                            verify = oscard.bind(golfie)();
                            zuuluu = verify.done;
                            tangon = verify;
                            if(zuuluu) { _fun00016_ip = 128; continue _fun00015 }
 119:
                            _fun00016_ip = 71; continue _fun00015;
 121:
                            michal = michal.v;
                            return michal;
 128:
                            michal = global;
                            zuuluu = michal.Promise;
                            michal = zuuluu.prototype;
                            michal = Object.create(michal, {constructor: {value: zuuluu}});
                            offset = function(argFoo) {
                                zuuluu = _closure1_slot7;
                                michal = zuuluu.info;
                                entity = 'URL is not whitelisted.';
                                entity = michal.bind(zuuluu)(entity);
                                zuuluu = argFoo;
                                entity = undefined;
                                michal = false;
                                michal = zuuluu.bind(entity)(michal);
                                return entity;
                            };
                            yankee = michal;
                            entity = new yankee[zuuluu](offset, verify);
                            entity = entity instanceof Object ? entity : michal;
                            return entity;
                        }
                    };
                    golfie = golfie.bind(zuuluu)(option);
                    SaveGenerator(address=429);
 427:
                    return golfie;
 429:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(option) { _fun00010_ip = 444; continue _fun00009 }
 435:
                    if(golfie) { _fun00010_ip = 462; continue _fun00009 }
 438:
                    option = tangon.bind(zuuluu)();
                    _fun00010_ip = 462; continue _fun00009;
 444:
                    return golfie;
 447:
                    return oscard;
 450:
                    return report;
 453: // catch_target0
                    CatchBlockStart(arg_register=4);
                    return zuuluu;
 458:
                    tangon = tangon.bind(zuuluu)();
 462:
                    return zuuluu;
 465:
                    return michal;
 468:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Linking;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.WebBrowserType;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'handleURL';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot7 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/links/native/handleURL.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: handleURL
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();
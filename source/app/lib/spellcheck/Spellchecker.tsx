// app/lib/spellcheck/Spellchecker.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    _fun62133: for(var _fun62133_ip = 0; ; ) switch(_fun62133_ip) {
 0:
        oscar = argBar;
        options = argBaz;
        zulu = argFred;
        golf = argPlugh;
        var _closure1_slot0 = oscar;
        var _closure1_slot1 = options;
        var _closure1_slot2 = golf;
        entity = function(argFoo) { // Original name: normalizeLocale
            _fun62134: for(var _fun62134_ip = 0; ; ) switch(_fun62134_ip) {
 0:
                tango = argFoo;
                report = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 7;
                entity = mike[entity];
                mike = undefined;
                entity = report.bind(mike)(entity);
                entity = entity[tango];
                oscar = null;
                if(!(oscar != entity)) { _fun62134_ip = 41; continue _fun62134 }
 38:
                tango = entity;
 41:
                report = _closure1_slot0;
                golf = _closure1_slot2;
                entity = 8;
                entity = golf[entity];
                options = report.bind(mike)(entity);
                golf = options.parse;
                verify = tango.replace;
                entity = /[_-]/g;
                report = '-';
                entity = verify.bind(tango)(entity, report);
                entity = golf.bind(options)(entity);
                verify = tango;
                if(!(oscar != entity)) { _fun62134_ip = 140; continue _fun62134 }
 108:
                tango = entity.langtag;
                tango = tango.language;
                if(!(oscar != tango)) { _fun62134_ip = 140; continue _fun62134 }
 124:
                tango = entity.langtag;
                tango = tango.region;
                if(!(oscar == tango)) { _fun62134_ip = 185; continue _fun62134 }
 140:
                oscar = _closure1_slot8;
                tango = oscar.error;
                zulu = global;
                zulu = zulu.HermesInternal;
                options = zulu.concat;
                golf = '';
                zulu = ' is not a valid locale.';
                zulu = options.bind(golf)(verify, zulu);
                zulu = tango.bind(oscar)(zulu);
                return mike;
 185:
                mike = entity.langtag;
                entity = mike.language;
                mike = mike.region;
                zulu = entity.language;
                entity = zulu.toLowerCase;
                tango = entity.bind(zulu)();
                entity = mike.toUpperCase;
                zulu = entity.bind(mike)();
                entity = global;
                entity = entity.HermesInternal;
                mike = entity.concat;
                entity = '';
                entity = mike.bind(entity)(tango, report, zulu);
                return entity;
            }
        };
        var _closure1_slot12 = entity;
        entity = function() { // Original name: _install
            report = undefined;
            entity = undefined;
            tango = _closure1_slot3;
            zulu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun62137: for(var _fun62137_ip = 0; ; ) switch(_fun62137_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun62137_ip = 146; continue _fun62137 }
 10:
                        tango = _closure1_slot9;
                        mike = tango.getAvailableDictionaries;
                        mike = mike.bind(tango)();
                        SaveGenerator(address=33);
 31:
                        return mike;
 33:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun62137_ip = 143; continue _fun62137 }
 39:
                        tango = null;
                        oscar = mike;
                        if(!(tango == oscar)) { _fun62137_ip = 52; continue _fun62137 }
 48:
                        oscar = new Array(0);
 52:
                        report = oscar.map;
                        tango = _closure1_slot12;
                        golf = report.bind(oscar)(tango);
                        oscar = golf.filter;
                        options = _closure1_slot0;
                        report = _closure1_slot2;
                        tango = 12;
                        tango = report[tango];
                        report = undefined;
                        tango = options.bind(report)(tango);
                        tango = tango.isNotNullish;
                        verify = oscar.bind(golf)(tango);
                        zulu = _closure1_slot10;
                        tango = zulu.prototype;
                        tango = Object.create(tango, {constructor: {value: zulu}});
                        offset = tango;
                        zulu = new offset[zulu](verify, options);
                        zulu = zulu instanceof Object ? zulu : tango;
                        tango = function(argFoo) { // Original name: attachToInput
                            _fun62138: for(var _fun62138_ip = 0; ; ) switch(_fun62138_ip) {
 0:
                                mike = argFoo;
                                var _closure5_slot0 = mike;
                                mike = global;
                                zulu = mike.document;
                                tango = zulu.body;
                                zulu = null;
                                if(!(zulu != tango)) { _fun62138_ip = 65; continue _fun62138 }
 28:
                                mike = mike.document;
                                report = mike.body;
                                tango = report.addEventListener;
                                zulu = 'beforeinput';
                                mike = function(argFoo) {
                                    tango = _closure1_slot11;
                                    zulu = _closure5_slot0;
                                    entity = argFoo;
                                    mike = entity.target;
                                    entity = undefined;
                                    entity = tango.bind(entity)(zulu, mike);
                                    return entity;
                                };
                                entity = true;
                                entity = tango.bind(report)(zulu, mike, entity);
 65:
                                entity = undefined;
                                return entity;
                            }
                        };
                        tango = tango.bind(report)(zulu);
                        return zulu;
 143:
                        return mike;
 146:
                        return entity;
                    }
                };
                return entity;
            };
            tango = tango.bind(report)(zulu);
            _closure1_slot13 = tango;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure1_slot13 = entity;
        entity = global;
        verify = entity.Object;
        report = verify.defineProperty;
        tango = {};
        entity = true;
        tango['value'] = entity;
        entity = '__esModule';
        entity = report.bind(verify)(zulu, entity, tango);
        entity = 0;
        tango = golf[entity];
        entity = undefined;
        tango = options.bind(entity)(tango);
        var _closure1_slot3 = tango;
        tango = 1;
        tango = golf[tango];
        tango = options.bind(entity)(tango);
        var _closure1_slot4 = tango;
        tango = 2;
        tango = golf[tango];
        tango = options.bind(entity)(tango);
        var _closure1_slot5 = tango;
        tango = 3;
        tango = golf[tango];
        tango = options.bind(entity)(tango);
        var _closure1_slot6 = tango;
        tango = 4;
        tango = golf[tango];
        tango = options.bind(entity)(tango);
        var _closure1_slot7 = tango;
        tango = 5;
        tango = golf[tango];
        verify = options.bind(entity)(tango);
        tango = verify.prototype;
        report = Object.create(tango, {constructor: {value: verify}});
        foxtrot = 'Spellchecker';
        backup = report;
        tango = new backup[verify](foxtrot, romeo);
        tango = tango instanceof Object ? tango : report;
        var _closure1_slot8 = tango;
        report = 6;
        tango = golf[report];
        verify = options.bind(entity)(tango);
        tango = null;
        verify = tango == verify;
        tango = undefined;
        if(verify) { _fun62133_ip = 237; continue _fun62133 }
 222:
        report = golf[report];
        report = options.bind(entity)(report);
        tango = report.spellCheck;
 237:
        var _closure1_slot9 = tango;
        tango = function() {
            tango = _closure1_slot6;
            zulu = function(argFoo) { // Original name: Spellchecker
                oscar = argFoo;
                report = this;
                var _closure3_slot0 = report;
                var _closure3_slot1 = oscar;
                golf = _closure1_slot5;
                tango = _closure2_slot0;
                entity = undefined;
                tango = golf.bind(entity)(report, tango);
                tango = true;
                report['_enabled'] = tango;
                tango = '';
                report['misspelledWord'] = tango;
                tango = new Array(0);
                report['corrections'] = tango;
                tango = _closure1_slot7;
                options = tango.locale;
                golf = options.split;
                tango = '-';
                options = golf.bind(options)(tango);
                golf = _closure1_slot4;
                tango = 2;
                golf = golf.bind(entity)(options, tango);
                tango = 0;
                options = golf[tango];
                var _closure3_slot2 = options;
                tango = 1;
                tango = golf[tango];
                report['regionPreference'] = tango;
                tango = report.getAvailableLanguages;
                tango = tango.bind(report)(oscar);
                var _closure3_slot3 = tango;
                oscar = _closure1_slot1;
                golf = _closure1_slot2;
                tango = 9;
                tango = golf[tango];
                golf = oscar.bind(entity)(tango);
                tango = golf.prototype;
                oscar = Object.create(tango, {constructor: {value: golf}});
                verify = function(argFoo) {
                    _fun62142: for(var _fun62142_ip = 0; ; ) switch(_fun62142_ip) {
 0:
                        tango = argFoo;
                        mike = _closure3_slot0;
                        oscar = mike.regionPreference;
                        mike = global;
                        mike = mike.HermesInternal;
                        report = mike.concat;
                        zulu = '';
                        mike = '-';
                        zulu = report.bind(zulu)(tango, mike, oscar);
                        report = _closure3_slot1;
                        mike = report.indexOf;
                        report = mike.bind(report)(zulu);
                        mike = -1;
                        if(!(mike === report)) { _fun62142_ip = 136; continue _fun62142 }
 68:
                        mike = _closure3_slot3;
                        report = mike[tango];
                        mike = null;
                        if(!(mike == report)) { _fun62142_ip = 115; continue _fun62142 }
 82:
                        golf = _closure1_slot1;
                        oscar = _closure1_slot2;
                        tango = 7;
                        oscar = oscar[tango];
                        tango = undefined;
                        oscar = golf.bind(tango)(oscar);
                        tango = _closure3_slot2;
                        report = oscar[tango];
 115:
                        if(!(mike != report)) { _fun62142_ip = 151; continue _fun62142 }
 119:
                        tango = _closure3_slot0;
                        mike = tango.setLocale;
                        mike = mike.bind(tango)(report);
                        _fun62142_ip = 151; continue _fun62142;
 136:
                        mike = _closure3_slot0;
                        entity = mike.setLocale;
                        entity = entity.bind(mike)(zulu);
 151:
                        entity = undefined;
                        return entity;
                    }
                };
                yankee = oscar;
                offset = options;
                tango = new yankee[golf](offset, verify, options);
                tango = tango instanceof Object ? tango : oscar;
                report['languageDetector'] = tango;
                report = _closure1_slot9;
                tango = report.on;
                zulu = 'spellcheck-result';
                mike = function(argFoo, argBar) {
                    _fun62143: for(var _fun62143_ip = 0; ; ) switch(_fun62143_ip) {
 0:
                        oscar = argFoo;
                        mike = argBar;
                        report = _closure3_slot0;
                        zulu = null;
                        golf = zulu != oscar;
                        tango = '';
                        if(!golf) { _fun62143_ip = 29; continue _fun62143 }
 26:
                        tango = oscar;
 29:
                        report['misspelledWord'] = tango;
                        entity = _closure3_slot0;
                        if(!(zulu == mike)) { _fun62143_ip = 47; continue _fun62143 }
 43:
                        mike = new Array(0);
 47:
                        entity['corrections'] = mike;
                        entity = undefined;
                        return entity;
                    }
                };
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            var _closure2_slot0 = zulu;
            entity = {};
            mike = 'enabled';
            entity['key'] = mike;
            mike = function() { // Original name: get
                entity = this;
                entity = entity._enabled;
                return entity;
            };
            entity['get'] = mike;
            mike = function(argFoo) { // Original name: set
                mike = argFoo;
                entity = this;
                entity['_enabled'] = mike;
                entity = undefined;
                return entity;
            };
            entity['set'] = mike;
            mike = new Array(9);
            mike[0] = entity;
            entity = {};
            oscar = 'setLearnedWords';
            entity['key'] = oscar;
            oscar = function(argFoo) { // Original name: value
                zulu = _closure1_slot9;
                mike = zulu.setLearnedWords;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            entity['value'] = oscar;
            mike[1] = entity;
            entity = {};
            oscar = 'setLocale';
            entity['key'] = oscar;
            oscar = function(argFoo) { // Original name: value
                _fun62147: for(var _fun62147_ip = 0; ; ) switch(_fun62147_ip) {
 0:
                    tango = argFoo;
                    var _closure3_slot0 = tango;
                    zulu = _closure1_slot9;
                    mike = zulu.setLocale;
                    zulu = mike.bind(zulu)(tango);
                    mike = null;
                    if(!(mike != zulu)) { _fun62147_ip = 48; continue _fun62147 }
 33:
                    mike = zulu.then;
                    entity = function(argFoo) {
                        _fun62148: for(var _fun62148_ip = 0; ; ) switch(_fun62148_ip) {
 0:
                            tango = _closure1_slot8;
                            zulu = tango.info;
                            report = _closure3_slot0;
                            entity = global;
                            entity = entity.HermesInternal;
                            mike = entity.concat;
                            entity = 'Switching to ';
                            mike = mike.bind(entity)(report);
                            entity = '(unavailable)';
                            report = argFoo;
                            if(!report) { _fun62148_ip = 62; continue _fun62148 }
 56:
                            entity = '(available)';
 62:
                            entity = zulu.bind(tango)(mike, entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
 48:
                    entity = undefined;
                    return entity;
                }
            };
            entity['value'] = oscar;
            mike[2] = entity;
            entity = {};
            oscar = 'setAppLocale';
            entity['key'] = oscar;
            oscar = function(argFoo) { // Original name: value
                zulu = argFoo;
                mike = zulu.split;
                entity = '-';
                mike = mike.bind(zulu)(entity);
                entity = 1;
                mike = mike[entity];
                entity = this;
                entity['regionPreference'] = mike;
                entity = undefined;
                return entity;
            };
            entity['value'] = oscar;
            mike[3] = entity;
            entity = {};
            oscar = 'detectLanguage';
            entity['key'] = oscar;
            oscar = function(argFoo) { // Original name: value
                _fun62150: for(var _fun62150_ip = 0; ; ) switch(_fun62150_ip) {
 0:
                    entity = this;
                    mike = entity.enabled;
                    if(!mike) { _fun62150_ip = 31; continue _fun62150 }
 11:
                    zulu = entity.languageDetector;
                    mike = zulu.process;
                    entity = argFoo;
                    entity = mike.bind(zulu)(entity);
 31:
                    entity = undefined;
                    return entity;
                }
            };
            entity['value'] = oscar;
            mike[4] = entity;
            entity = {};
            oscar = 'getAvailableLanguages';
            entity['key'] = oscar;
            oscar = function(argFoo) { // Original name: value
                tango = argFoo;
                entity = {};
                var _closure3_slot0 = entity;
                zulu = tango.forEach;
                mike = function(argFoo) {
                    _fun62152: for(var _fun62152_ip = 0; ; ) switch(_fun62152_ip) {
 0:
                        mike = argFoo;
                        zulu = mike.split;
                        entity = '-';
                        report = zulu.bind(mike)(entity);
                        tango = _closure1_slot4;
                        entity = undefined;
                        zulu = 1;
                        tango = tango.bind(entity)(report, zulu);
                        zulu = 0;
                        tango = tango[zulu];
                        zulu = _closure3_slot0;
                        report = zulu[tango];
                        oscar = null;
                        if(!(oscar != report)) { _fun62152_ip = 61; continue _fun62152 }
 58:
                        mike = report;
 61:
                        zulu[tango] = mike;
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            entity['value'] = oscar;
            mike[5] = entity;
            entity = {};
            oscar = 'isMisspelled';
            entity['key'] = oscar;
            oscar = function(argFoo) { // Original name: value
                _fun62153: for(var _fun62153_ip = 0; ; ) switch(_fun62153_ip) {
 0:
                    mike = this;
                    zulu = mike.misspelledWord;
                    entity = '';
                    entity = entity !== zulu;
                    if(!entity) { _fun62153_ip = 33; continue _fun62153 }
 20:
                    zulu = mike.misspelledWord;
                    mike = argFoo;
                    entity = mike === zulu;
 33:
                    return entity;
                }
            };
            entity['value'] = oscar;
            mike[6] = entity;
            entity = {};
            oscar = 'getCorrectionsForMisspelling';
            entity['key'] = oscar;
            oscar = function(argFoo, argBar) { // Original name: value
                _fun62154: for(var _fun62154_ip = 0; ; ) switch(_fun62154_ip) {
 0:
                    mike = this;
                    tango = mike.isMisspelled;
                    zulu = argFoo;
                    entity = argBar;
                    entity = tango.bind(mike)(zulu, entity);
                    if(entity) { _fun62154_ip = 30; continue _fun62154 }
 24:
                    entity = new Array(0);
                    _fun62154_ip = 36; continue _fun62154;
 30:
                    entity = mike.corrections;
 36:
                    return entity;
                }
            };
            entity['value'] = oscar;
            mike[7] = entity;
            entity = {};
            oscar = 'replaceMisspelling';
            entity['key'] = oscar;
            report = function(argFoo) { // Original name: value
                zulu = _closure1_slot9;
                mike = zulu.replaceMisspelling;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            entity['value'] = report;
            mike[8] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        tango = tango.bind(entity)();
        var _closure1_slot10 = tango;
        report = 10;
        report = golf[report];
        offset = options.bind(entity)(report);
        verify = offset.debounce;
        options = function(argFoo, argBar) {
            _fun62156: for(var _fun62156_ip = 0; ; ) switch(_fun62156_ip) {
 0:
                zulu = argFoo;
                tango = argBar;
                entity = null;
                report = entity == tango;
                mike = null;
                if(report) { _fun62156_ip = 174; continue _fun62156 }
 20:
                verify = _closure1_slot0;
                oscar = _closure1_slot2;
                options = 11;
                golf = oscar[options];
                oscar = undefined;
                yankee = verify.bind(oscar)(golf);
                offset = yankee.isElement;
                golf = global;
                verify = golf.HTMLInputElement;
                verify = offset.bind(yankee)(tango, verify);
                if(verify) { _fun62156_ip = 169; continue _fun62156 }
 68:
                offset = _closure1_slot0;
                verify = _closure1_slot2;
                verify = verify[options];
                offset = offset.bind(oscar)(verify);
                verify = offset.isElement;
                golf = golf.HTMLTextAreaElement;
                golf = verify.bind(offset)(tango, golf);
                if(golf) { _fun62156_ip = 169; continue _fun62156 }
 106:
                golf = _closure1_slot0;
                report = _closure1_slot2;
                report = report[options];
                golf = golf.bind(oscar)(report);
                report = golf.isElement;
                report = report.bind(golf)(tango);
                mike = undefined;
                if(!report) { _fun62156_ip = 174; continue _fun62156 }
 139:
                golf = tango.hasAttribute;
                report = 'contenteditable';
                report = golf.bind(tango)(report);
                mike = undefined;
                if(!report) { _fun62156_ip = 174; continue _fun62156 }
 161:
                mike = tango.textContent;
                _fun62156_ip = 174; continue _fun62156;
 169:
                mike = tango.value;
 174:
                if(!(entity != mike)) { _fun62156_ip = 191; continue _fun62156 }
 178:
                entity = zulu.detectLanguage;
                entity = entity.bind(zulu)(mike);
 191:
                entity = undefined;
                return entity;
            }
        };
        report = 250;
        report = verify.bind(offset)(options, report);
        var _closure1_slot11 = report;
        report = 13;
        report = golf[report];
        golf = oscar.bind(entity)(report);
        oscar = golf.fileFinishedImporting;
        report = 'lib/spellcheck/Spellchecker.tsx';
        report = oscar.bind(golf)(report);
        zulu['Spellchecker'] = tango;
        mike = function() { // Original name: install
            entity = undefined;
            tango = _closure1_slot13;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        zulu['install'] = mike;
        return entity;
    }
})();
// app/utils/ApplicationAssetUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun68255: for(var _fun68255_ip = 0; ; ) switch(_fun68255_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun68255_ip = 46; continue _fun68255 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun68255_ip = 55; continue _fun68255 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun68255_ip = 345; continue _fun68255 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun68255_ip = 323; continue _fun68255 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun68255_ip = 283; continue _fun68255 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun68255_ip = 270; continue _fun68255 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun68255_ip = 163; continue _fun68255 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun68255_ip = 179; continue _fun68255 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun68255_ip = 249; continue _fun68255 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun68255_ip = 249; continue _fun68255 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun68255_ip = 234; continue _fun68255 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun68255_ip = 247; continue _fun68255 }
 234:
            verify = _closure1_slot15;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun68255_ip = 265; continue _fun68255;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun68255_ip = 283; continue _fun68255;
 270:
            golf = _closure1_slot15;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun68255_ip = 323; continue _fun68255 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun68255_ip = 330; continue _fun68255 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun68256: for(var _fun68256_ip = 0; ; ) switch(_fun68256_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun68256_ip = 56; continue _fun68256 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun68256_ip = 67; continue _fun68256;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun68257: for(var _fun68257_ip = 0; ; ) switch(_fun68257_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun68257_ip = 23; continue _fun68257 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun68257_ip = 33; continue _fun68257 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun68257_ip = 70; continue _fun68257 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun68257_ip = 55; continue _fun68257 }
 70:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: updateAssets
        entity = undefined;
        tango = _closure1_slot17;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _updateAssets
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun68261: for(var _fun68261_ip = 0; ; ) switch(_fun68261_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun68261_ip = 171; continue _fun68261 }
 13:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 5;
                    mike = oscar[mike];
                    golf = undefined;
                    mike = tango.bind(golf)(mike);
                    oscar = mike.HTTP;
                    tango = oscar.get;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    verify = _closure1_slot6;
                    options = verify.APPLICATION_ASSETS;
                    options = options.bind(verify)(report);
                    mike['url'] = options;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=88);
 86:
                    return mike;
 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun68261_ip = 168; continue _fun68261 }
 94:
                    options = mike.body;
                    oscar = _closure1_slot1;
                    verify = _closure1_slot2;
                    tango = 6;
                    tango = verify[tango];
                    golf = oscar.bind(golf)(tango);
                    oscar = golf.dispatch;
                    tango = {};
                    verify = 'APPLICATION_ASSETS_UPDATE';
                    tango['type'] = verify;
                    tango['applicationId'] = report;
                    tango['assets'] = options;
                    tango = oscar.bind(golf)(tango);
                    tango = _closure1_slot5;
                    zulu = tango.getApplicationAssets;
                    zulu = zulu.bind(tango)(report);
                    return zulu;
 168:
                    return mike;
 171:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot17 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: getApplicationAssetsMap
        _fun68262: for(var _fun68262_ip = 0; ; ) switch(_fun68262_ip) {
 0:
            tango = argFoo;
            zulu = _closure1_slot5;
            entity = zulu.getApplicationAssets;
            report = entity.bind(zulu)(tango);
            entity = null;
            if(!(entity != report)) { _fun68262_ip = 81; continue _fun68262 }
 27:
            oscar = report.lastUpdated;
            entity = global;
            golf = entity.Date;
            zulu = golf.now;
            zulu = zulu.bind(golf)();
            oscar = zulu - oscar;
            zulu = _closure1_slot9;
            if(!(!(oscar > zulu))) { _fun68262_ip = 81; continue _fun68262 }
 62:
            zulu = entity.Promise;
            entity = zulu.resolve;
            entity = entity.bind(zulu)(report);
            _fun68262_ip = 92; continue _fun68262;
 81:
            zulu = _closure1_slot16;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 92:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    oscar = function(argFoo, argBar) { // Original name: getAssetFromImageURL
        _fun68263: for(var _fun68263_ip = 0; ; ) switch(_fun68263_ip) {
 0:
            oscar = argFoo;
            entity = _closure1_slot12;
            zulu = entity[oscar];
            mike = zulu.serialize;
            entity = argBar;
            zulu = mike.bind(zulu)(entity);
            entity = null;
            if(!zulu) { _fun68263_ip = 70; continue _fun68263 }
 33:
            mike = zulu.toString;
            report = mike.bind(zulu)();
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = '';
            mike = ':';
            entity = tango.bind(zulu)(oscar, mike, report);
 70:
            return entity;
        }
    };
    var _closure1_slot19 = oscar;
    report = function() { // Original name: getAssets
        entity = undefined;
        tango = _closure1_slot21;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot20 = report;
    entity = function() { // Original name: _getAssets
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun68267: for(var _fun68267_ip = 0; ; ) switch(_fun68267_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun68267_ip = 57; continue _fun68267 }
 7:
                    tango = _closure1_slot18;
                    zulu = undefined;
                    mike = argFoo;
                    mike = tango.bind(zulu)(mike);
                    SaveGenerator(address=28);
 26:
                    return mike;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun68267_ip = 54; continue _fun68267 }
 34:
                    tango = null;
                    tango = tango == mike;
                    zulu = undefined;
                    if(tango) { _fun68267_ip = 51; continue _fun68267 }
 45:
                    zulu = mike.assets;
 51:
                    return zulu;
 54:
                    return mike;
 57:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot21 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: _resolveExternalAssets
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun68270: for(var _fun68270_ip = 0; ; ) switch(_fun68270_ip) {
 0:
                    StartGenerator();
                    tango = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun68270_ip = 220; continue _fun68270 }
 13:
                    zulu = tango.filter;
                    mike = function(argFoo) {
                        _fun68271: for(var _fun68271_ip = 0; ; ) switch(_fun68271_ip) {
 0:
                            tango = argFoo;
                            zulu = null;
                            entity = zulu != tango;
                            if(!entity) { _fun68271_ip = 52; continue _fun68271 }
 12:
                            mike = global;
                            mike = mike.Object;
                            mike = mike.prototype;
                            oscar = mike.hasOwnProperty;
                            report = oscar.call;
                            mike = _closure1_slot13;
                            mike = report.bind(oscar)(mike, tango);
                            entity = !mike;
 52:
                            if(!entity) { _fun68271_ip = 70; continue _fun68271 }
 55:
                            mike = _closure1_slot13;
                            mike = mike[tango];
                            entity = zulu == mike;
 70:
                            return entity;
                        }
                    };
                    verify = zulu.bind(tango)(mike);
                    zulu = verify.length;
                    mike = 0;
                    if(!(mike !== zulu)) { _fun68270_ip = 212; continue _fun68270 }
 46:
                    tango = _closure1_slot14;
                    zulu = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 5;
                    mike = report[mike];
                    oscar = undefined;
                    mike = zulu.bind(oscar)(mike);
                    report = mike.HTTP;
                    zulu = report.post;
                    mike = {};
                    yankee = _closure1_slot6;
                    offset = yankee.APPLICATION_EXTERNAL_ASSETS;
                    options = argFoo;
                    options = offset.bind(yankee)(options);
                    mike['url'] = options;
                    options = {};
                    options['urls'] = verify;
                    mike['body'] = options;
                    options = true;
                    mike['oldFormErrors'] = options;
                    options = false;
                    mike['rejectWithError'] = options;
                    mike = zulu.bind(report)(mike);
                    SaveGenerator(address=143);
 141:
                    return mike;
 143:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun68270_ip = 217; continue _fun68270 }
 149:
                    zulu = mike.body;
                    report = tango.bind(oscar)(zulu);
                    tango = report.bind(oscar)();
                    zulu = tango.done;
                    if(zulu) { _fun68270_ip = 212; continue _fun68270 }
 171:
                    zulu = tango.value;
                    verify = zulu.url;
                    options = zulu.external_asset_path;
                    zulu = _closure1_slot13;
                    zulu[verify] = options;
                    options = report.bind(oscar)();
                    zulu = options.done;
                    tango = options;
                    if(!zulu) { _fun68270_ip = 171; continue _fun68270 }
 212:
                    zulu = undefined;
                    return zulu;
 217:
                    return mike;
 220:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot22 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar) { // Original name: updateUrlAssetIds
        _fun68272: for(var _fun68272_ip = 0; ; ) switch(_fun68272_ip) {
 0:
            entity = argFoo;
            yankee = argBar;
            zulu = entity.filter;
            mike = function(argFoo) {
                _fun68273: for(var _fun68273_ip = 0; ; ) switch(_fun68273_ip) {
 0:
                    report = argFoo;
                    zulu = null;
                    tango = zulu == report;
                    entity = undefined;
                    if(tango) { _fun68273_ip = 31; continue _fun68273 }
 14:
                    oscar = report.startsWith;
                    tango = 'http:';
                    entity = oscar.bind(report)(tango);
 31:
                    if(entity) { _fun68273_ip = 61; continue _fun68273 }
 34:
                    zulu = zulu == report;
                    mike = undefined;
                    if(zulu) { _fun68273_ip = 58; continue _fun68273 }
 43:
                    tango = report.startsWith;
                    zulu = 'https:';
                    mike = tango.bind(report)(zulu);
 58:
                    entity = mike;
 61:
                    return entity;
                }
            };
            mike = zulu.bind(entity)(mike);
            mike = mike.length;
            romeo = 0;
            zulu = mike > romeo;
            mike = 0;
            if(!zulu) { _fun68272_ip = 181; continue _fun68272 }
 44:
            zulu = entity.length;
            zulu = romeo < zulu;
            offset = undefined;
            options = null;
            golf = global;
            oscar = 0;
            report = 0;
            tango = undefined;
            mike = 0;
            if(!zulu) { _fun68272_ip = 181; continue _fun68272 }
 73:
            backup = entity[report];
            romeo = oscar;
            if(!(options != backup)) { _fun68272_ip = 163; continue _fun68272 }
 84:
            zulu = golf.Object;
            zulu = zulu.prototype;
            kilo = zulu.hasOwnProperty;
            foxtrot = kilo.call;
            zulu = _closure1_slot13;
            foxtrot = foxtrot.bind(kilo)(zulu, backup);
            zulu = undefined;
            if(!foxtrot) { _fun68272_ip = 129; continue _fun68272 }
 121:
            foxtrot = _closure1_slot13;
            zulu = foxtrot[backup];
 129:
            romeo = oscar;
            tango = zulu;
            if(!(options != tango)) { _fun68272_ip = 163; continue _fun68272 }
 139:
            backup = _closure1_slot19;
            foxtrot = _closure1_slot8;
            foxtrot = backup.bind(offset)(foxtrot, zulu);
            yankee[report] = foxtrot;
            romeo = oscar + 1;
            tango = zulu;
 163:
            report = report + 1;
            zulu = entity.length;
            oscar = romeo;
            mike = oscar;
            if(report < zulu) { _fun68272_ip = 73; continue _fun68272 }
 181:
            entity = entity.length;
            entity = mike === entity;
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: updateNonUrlAssetIds
        _fun68274: for(var _fun68274_ip = 0; ; ) switch(_fun68274_ip) {
 0:
            foxtrot = argFoo;
            romeo = argBar;
            yankee = argBaz;
            offset = argCorge;
            entity = foxtrot.length;
            verify = 0;
            mike = verify < entity;
            tango = false;
            golf = null;
            report = global;
            zulu = 0;
            options = undefined;
            entity = false;
            if(!mike) { _fun68274_ip = 171; continue _fun68274 }
 41:
            sizing = foxtrot[zulu];
            backup = tango;
            kilo = options;
            if(!(golf != sizing)) { _fun68274_ip = 150; continue _fun68274 }
 55:
            mike = romeo[zulu];
            backup = tango;
            kilo = options;
            if(!(golf == mike)) { _fun68274_ip = 150; continue _fun68274 }
 69:
            mike = report.Object;
            mike = mike.prototype;
            output = mike.hasOwnProperty;
            mike = output.call;
            mike = mike.bind(output)(yankee, sizing);
            if(!mike) { _fun68274_ip = 104; continue _fun68274 }
 100:
            mike = yankee[sizing];
 104:
            sizing = tango;
            if(mike) { _fun68274_ip = 135; continue _fun68274 }
 110:
            if(!(golf != offset)) { _fun68274_ip = 123; continue _fun68274 }
 114:
            output = offset <= verify;
            sizing = true;
            if(!output) { _fun68274_ip = 135; continue _fun68274 }
 123:
            romeo[zulu] = golf;
            backup = tango;
            kilo = mike;
            _fun68274_ip = 150; continue _fun68274;
 135:
            output = mike.id;
            romeo[zulu] = output;
            backup = sizing;
            kilo = mike;
 150:
            zulu = zulu + 1;
            mike = foxtrot.length;
            tango = backup;
            options = kilo;
            entity = tango;
            if(zulu < mike) { _fun68274_ip = 41; continue _fun68274 }
 171:
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    tango = function() { // Original name: fetchAssetIds
        entity = undefined;
        tango = _closure1_slot26;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot25 = tango;
    entity = function() { // Original name: _fetchAssetIds
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun68278: for(var _fun68278_ip = 0; ; ) switch(_fun68278_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    foxtrot = argBar;
                    romeo = arguments[2];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun68278_ip = 405; continue _fun68278 }
 21:
                    var _closure4_slot0 = options;
                    var _closure4_slot1 = foxtrot;
                    golf = undefined;
                    if(!(romeo === golf)) { _fun68278_ip = 38; continue _fun68278 }
 35:
                    romeo = 1;
 38:
                    var _closure4_slot2 = romeo;
                    SaveGenerator(address=46);
 44:
                    return golf;
 46:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun68278_ip = 402; continue _fun68278 }
 55:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    verify = 6;
                    zulu = zulu[verify];
                    oscar = tango.bind(golf)(zulu);
                    tango = oscar.dispatch;
                    zulu = {};
                    offset = 'APPLICATION_ASSETS_FETCH';
                    zulu['type'] = offset;
                    zulu['applicationId'] = options;
                    zulu = tango.bind(oscar)(zulu);
                    tango = new Array(0);
                    oscar = foxtrot.filter;
                    zulu = function(argFoo) {
                        _fun68279: for(var _fun68279_ip = 0; ; ) switch(_fun68279_ip) {
 0:
                            report = argFoo;
                            zulu = null;
                            tango = zulu == report;
                            entity = undefined;
                            if(tango) { _fun68279_ip = 31; continue _fun68279 }
 14:
                            oscar = report.startsWith;
                            tango = 'http:';
                            entity = oscar.bind(report)(tango);
 31:
                            if(entity) { _fun68279_ip = 61; continue _fun68279 }
 34:
                            zulu = zulu == report;
                            mike = undefined;
                            if(zulu) { _fun68279_ip = 58; continue _fun68279 }
 43:
                            tango = report.startsWith;
                            zulu = 'https:';
                            mike = tango.bind(report)(zulu);
 58:
                            entity = mike;
 61:
                            return entity;
                        }
                    };
                    oscar = oscar.bind(foxtrot)(zulu);
                    offset = oscar.length;
                    zulu = 0;
                    if(!(offset > zulu)) { _fun68278_ip = 162; continue _fun68278 }
 136:
                    zulu = function() { // Original name: resolveExternalAssets
                        entity = undefined;
                        tango = _closure1_slot22;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    zulu = zulu.bind(golf)(options, oscar);
                    SaveGenerator(address=153);
 151:
                    return zulu;
 153:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscar) { _fun68278_ip = 399; continue _fun68278 }
 162:
                    oscar = _closure1_slot23;
                    oscar = oscar.bind(golf)(foxtrot, tango);
                    if(oscar) { _fun68278_ip = 353; continue _fun68278 }
 178:
                    oscar = _closure1_slot20;
                    oscar = oscar.bind(golf)(options);
                    SaveGenerator(address=191);
 189:
                    return oscar;
 191:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=9);
                    if(offset) { _fun68278_ip = 350; continue _fun68278 }
 200:
                    backup = _closure1_slot1;
                    offset = _closure1_slot2;
                    offset = offset[verify];
                    kilo = backup.bind(golf)(offset);
                    backup = kilo.dispatch;
                    offset = {};
                    sizing = 'APPLICATION_ASSETS_UPDATE';
                    offset['type'] = sizing;
                    offset['applicationId'] = options;
                    offset['assets'] = oscar;
                    offset = backup.bind(kilo)(offset);
                    offset = _closure1_slot24;
                    source = undefined;
                    update = foxtrot;
                    echo = tango;
                    result = oscar;
                    output = romeo;
                    offset = source[offset](update, echo, result, output, sizing);
                    if(offset) { _fun68278_ip = 321; continue _fun68278 }
 273:
                    romeo = _closure1_slot1;
                    offset = _closure1_slot2;
                    offset = offset[verify];
                    foxtrot = romeo.bind(golf)(offset);
                    romeo = foxtrot.dispatch;
                    offset = {};
                    backup = 'APPLICATION_ASSETS_FETCH_SUCCESS';
                    offset['type'] = backup;
                    offset['applicationId'] = options;
                    offset = romeo.bind(foxtrot)(offset);
                    offset = tango;
                    _fun68278_ip = 347; continue _fun68278;
 321:
                    romeo = _closure1_slot16;
                    foxtrot = romeo.bind(golf)(options);
                    romeo = foxtrot.then;
                    yankee = function() {
                        report = _closure1_slot25;
                        tango = _closure4_slot0;
                        zulu = _closure4_slot1;
                        mike = _closure4_slot2;
                        entity = 1;
                        mike = mike - entity;
                        entity = undefined;
                        entity = report.bind(entity)(tango, zulu, mike);
                        return entity;
                    };
                    offset = romeo.bind(foxtrot)(yankee);
 347:
                    return offset;
 350:
                    return oscar;
 353:
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[verify];
                    golf = oscar.bind(golf)(report);
                    oscar = golf.dispatch;
                    report = {};
                    verify = 'APPLICATION_ASSETS_FETCH_SUCCESS';
                    report['type'] = verify;
                    report['applicationId'] = options;
                    report = oscar.bind(golf)(report);
                    return tango;
 399:
                    return zulu;
 402:
                    return mike;
 405:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot26 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = offset.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 3;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    offset = golf.Endpoints;
    var _closure1_slot6 = offset;
    offset = golf.PlatformTypes;
    var _closure1_slot7 = offset;
    yankee = 'mp';
    var _closure1_slot8 = yankee;
    golf = 3600000;
    var _closure1_slot9 = golf;
    golf = /https:\\/\\/static-cdn\.jtvnw\.net\\/previews-ttv\\/live_user_(.+)-\{width\}x\{height\}.jpg/;
    var _closure1_slot10 = golf;
    golf = /https:\\/\\/i\.ytimg\.com\\/vi\\/([a-zA-Z0-9_-]+)\\/hqdefault_live\.jpg/;
    var _closure1_slot11 = golf;
    golf = {};
    foxtrot = offset.SPOTIFY;
    romeo = {};
    backup = function(argFoo) { // Original name: deserialize
        entity = global;
        tango = entity.encodeURIComponent;
        zulu = undefined;
        mike = argFoo;
        tango = tango.bind(zulu)(mike);
        entity = entity.HermesInternal;
        zulu = entity.concat;
        mike = '';
        entity = 'https://i.scdn.co/image/';
        entity = zulu.bind(mike)(entity, tango);
        return entity;
    };
    romeo['deserialize'] = backup;
    backup = function(argFoo) { // Original name: serialize
        zulu = argFoo;
        mike = zulu.split;
        entity = 'https://i.scdn.co/image/';
        mike = mike.bind(zulu)(entity);
        entity = 1;
        entity = mike[entity];
        return entity;
    };
    romeo['serialize'] = backup;
    golf[foxtrot] = romeo;
    foxtrot = offset.TWITCH;
    romeo = {};
    backup = function(argFoo, argBar) { // Original name: deserialize
        zulu = argBar;
        entity = global;
        report = entity.encodeURIComponent;
        tango = undefined;
        mike = argFoo;
        backup = report.bind(tango)(mike);
        mike = 0;
        romeo = zulu[mike];
        mike = 1;
        offset = zulu[mike];
        entity = entity.HermesInternal;
        report = entity.concat;
        kilo = 'https://static-cdn.jtvnw.net/previews-ttv/live_user_';
        foxtrot = '-';
        yankee = 'x';
        verify = '.jpg';
        entity = kilo[report](backup, foxtrot, romeo, yankee, offset, verify, options);
        return entity;
    };
    romeo['deserialize'] = backup;
    backup = function(argFoo) { // Original name: serialize
        _fun68285: for(var _fun68285_ip = 0; ; ) switch(_fun68285_ip) {
 0:
            zulu = argFoo;
            mike = zulu.match;
            entity = _closure1_slot10;
            zulu = mike.bind(zulu)(entity);
            entity = null;
            mike = entity != zulu;
            if(!mike) { _fun68285_ip = 37; continue _fun68285 }
 30:
            mike = 1;
            entity = zulu[mike];
 37:
            return entity;
        }
    };
    romeo['serialize'] = backup;
    golf[foxtrot] = romeo;
    romeo = offset.YOUTUBE;
    offset = {};
    foxtrot = function(argFoo) { // Original name: deserialize
        entity = global;
        tango = entity.encodeURIComponent;
        zulu = undefined;
        mike = argFoo;
        tango = tango.bind(zulu)(mike);
        entity = entity.HermesInternal;
        zulu = entity.concat;
        mike = 'https://i.ytimg.com/vi/';
        entity = '/hqdefault_live.jpg';
        entity = zulu.bind(mike)(tango, entity);
        return entity;
    };
    offset['deserialize'] = foxtrot;
    foxtrot = function(argFoo) { // Original name: serialize
        _fun68287: for(var _fun68287_ip = 0; ; ) switch(_fun68287_ip) {
 0:
            zulu = argFoo;
            mike = zulu.match;
            entity = _closure1_slot11;
            zulu = mike.bind(zulu)(entity);
            entity = null;
            mike = entity != zulu;
            if(!mike) { _fun68287_ip = 37; continue _fun68287 }
 30:
            mike = 1;
            entity = zulu[mike];
 37:
            return entity;
        }
    };
    offset['serialize'] = foxtrot;
    golf[romeo] = offset;
    offset = {};
    romeo = function(argFoo) { // Original name: deserialize
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 4;
        entity = zulu[entity];
        report = undefined;
        tango = mike.bind(report)(entity);
        entity = global;
        mike = entity.window;
        mike = mike.GLOBAL_ENV;
        zulu = mike.MEDIA_PROXY_ENDPOINT;
        mike = null;
        zulu = mike != zulu;
        mike = 'MEDIA_PROXY_ENDPOINT not configured';
        mike = tango.bind(report)(zulu, mike);
        tango = entity.URL;
        mike = entity.location;
        mike = mike.protocol;
        entity = entity.window;
        entity = entity.GLOBAL_ENV;
        entity = entity.MEDIA_PROXY_ENDPOINT;
        oscar = mike + entity;
        entity = tango.prototype;
        mike = Object.create(entity, {constructor: {value: tango}});
        golf = argFoo;
        options = mike;
        entity = new options[tango](golf, oscar, report);
        mike = entity instanceof Object ? entity : mike;
        entity = mike.toString;
        entity = entity.bind(mike)();
        return entity;
    };
    offset['deserialize'] = romeo;
    romeo = function(argFoo) { // Original name: serialize
        entity = argFoo;
        return entity;
    };
    offset['serialize'] = romeo;
    golf[yankee] = offset;
    var _closure1_slot12 = golf;
    golf = {};
    var _closure1_slot13 = golf;
    golf = 9;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'utils/ApplicationAssetUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['getAssetFromImageURL'] = oscar;
    oscar = function(argFoo, argBar, argBaz) { // Original name: getAssetImage
        _fun68290: for(var _fun68290_ip = 0; ; ) switch(_fun68290_ip) {
 0:
            kilo = argFoo;
            tango = argBar;
            golf = argBaz;
            mike = null;
            if(!(mike != tango)) { _fun68290_ip = 35; continue _fun68290 }
 15:
            entity = tango.includes;
            zulu = ':';
            entity = entity.bind(tango)(zulu);
            if(entity) { _fun68290_ip = 372; continue _fun68290 }
 35:
            if(!(mike != kilo)) { _fun68290_ip = 43; continue _fun68290 }
 39:
            if(!(mike == tango)) { _fun68290_ip = 47; continue _fun68290 }
 43:
            entity = undefined;
            return entity;
 47:
            report = global;
            oscar = report.Array;
            entity = oscar.isArray;
            entity = entity.bind(oscar)(golf);
            options = golf;
            if(!entity) { _fun68290_ip = 111; continue _fun68290 }
 71:
            verify = report.Math;
            oscar = verify.max;
            entity = new Array(0);
            control = 0;
            sequence = entity;
            vacuum = golf;
            offset = arraySpread(sequence, vacuum, control);
            sequence = oscar;
            vacuum = entity;
            control = verify;
            options = apply(sequence, vacuum, control);
 111:
            backup = '';
            oscar = 'number';
            entity = typeof options;
            foxtrot = backup;
            if(!(oscar === entity)) { _fun68290_ip = 187; continue _fun68290 }
 129:
            verify = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 8;
            oscar = oscar[entity];
            entity = undefined;
            oscar = verify.bind(entity)(oscar);
            entity = oscar.getBestMediaProxySize;
            options = entity.bind(oscar)(options);
            entity = report.HermesInternal;
            oscar = entity.concat;
            entity = '?size=';
            foxtrot = oscar.bind(entity)(options);
 187:
            entity = report.window;
            entity = entity.GLOBAL_ENV;
            entity = entity.CDN_HOST;
            if(!(mike == entity)) { _fun68290_ip = 291; continue _fun68290 }
 209:
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 5;
            oscar = oscar[entity];
            entity = undefined;
            oscar = options.bind(entity)(oscar);
            entity = oscar.getAPIBaseURL;
            sequence = entity.bind(oscar)();
            entity = report.HermesInternal;
            verify = entity.concat;
            vacuum = '/applications/';
            source = '/app-assets/';
            echo = '.png';
            config = backup;
            control = kilo;
            update = tango;
            result = foxtrot;
            entity = config[verify](sequence, vacuum, control, source, update, echo, result, output);
            _fun68290_ip = 370; continue _fun68290;
 291:
            oscar = report.location;
            sequence = oscar.protocol;
            oscar = report.window;
            oscar = oscar.GLOBAL_ENV;
            control = oscar.CDN_HOST;
            report = report.HermesInternal;
            offset = report.concat;
            vacuum = '//';
            source = '/app-assets/';
            echo = '/';
            output = '.png';
            config = backup;
            update = kilo;
            result = tango;
            sizing = foxtrot;
            entity = config[offset](sequence, vacuum, control, source, update, echo, result, output, sizing, kilo);
 370:
            return entity;
 372:
            entity = tango.split;
            oscar = entity.bind(tango)(zulu);
            tango = _closure1_slot3;
            report = undefined;
            entity = 2;
            tango = tango.bind(report)(oscar, entity);
            entity = 0;
            options = tango[entity];
            entity = 1;
            oscar = tango[entity];
            entity = _closure1_slot7;
            entity = entity.TWITCH;
            if(!(options !== entity)) { _fun68290_ip = 487; continue _fun68290 }
 427:
            entity = global;
            entity = entity.Object;
            entity = entity.prototype;
            verify = entity.hasOwnProperty;
            tango = verify.call;
            entity = _closure1_slot12;
            tango = tango.bind(verify)(entity, options);
            entity = undefined;
            if(!tango) { _fun68290_ip = 485; continue _fun68290 }
 466:
            tango = _closure1_slot12;
            options = tango[options];
            tango = options.deserialize;
            entity = tango.bind(options)(oscar);
 485:
            _fun68290_ip = 601; continue _fun68290;
 487:
            if(!(mike != golf)) { _fun68290_ip = 534; continue _fun68290 }
 491:
            tango = 'number';
            mike = typeof golf;
            if(!(tango !== mike)) { _fun68290_ip = 534; continue _fun68290 }
 502:
            tango = _closure1_slot12;
            mike = _closure1_slot7;
            mike = mike.TWITCH;
            tango = tango[mike];
            mike = tango.deserialize;
            mike = mike.bind(tango)(oscar, golf);
            _fun68290_ip = 598; continue _fun68290;
 534:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 7;
            zulu = oscar[zulu];
            report = tango.bind(report)(zulu);
            zulu = report.prototype;
            tango = Object.create(zulu, {constructor: {value: report}});
            sequence = 'ApplicationAssetUtils';
            config = tango;
            zulu = new config[report](sequence, vacuum);
            report = zulu instanceof Object ? zulu : tango;
            tango = report.warn;
            zulu = 'getAssetImage: size must === [number, number] for Twitch';
            zulu = tango.bind(report)(zulu);
            mike = undefined;
 598:
            entity = mike;
 601:
            return entity;
        }
    };
    zulu['getAssetImage'] = oscar;
    zulu['getAssets'] = report;
    zulu['fetchAssetIds'] = tango;
    mike = function(argFoo, argBar) { // Original name: getAssetIds
        _fun68291: for(var _fun68291_ip = 0; ; ) switch(_fun68291_ip) {
 0:
            report = argBar;
            entity = new Array(0);
            zulu = _closure1_slot23;
            tango = undefined;
            zulu = zulu.bind(tango)(report, entity);
            if(zulu) { _fun68291_ip = 77; continue _fun68291 }
 25:
            golf = _closure1_slot5;
            oscar = golf.getApplicationAssets;
            zulu = argFoo;
            golf = oscar.bind(golf)(zulu);
            oscar = null;
            options = oscar == golf;
            zulu = undefined;
            if(options) { _fun68291_ip = 60; continue _fun68291 }
 54:
            zulu = golf.assets;
 60:
            if(!(oscar != zulu)) { _fun68291_ip = 75; continue _fun68291 }
 64:
            mike = _closure1_slot24;
            mike = mike.bind(tango)(report, entity, zulu);
 75:
            return entity;
 77:
            return entity;
        }
    };
    zulu['getAssetIds'] = mike;
    return entity;
})();
// app/modules/coded_links/MessageCodedLinkManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun123937: for(var _fun123937_ip = 0; ; ) switch(_fun123937_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot12;
            entity = entity.bind(zulu)();
            if(entity) { _fun123937_ip = 48; continue _fun123937 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun123937_ip = 86; continue _fun123937;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun123938: for(var _fun123938_ip = 0; ; ) switch(_fun123938_ip) {
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
            _fun123938_ip = 76; continue _fun123938;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: resolveMessageCodedLinks
        _fun123941: for(var _fun123941_ip = 0; ; ) switch(_fun123941_ip) {
 0:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = argFoo;
            mike = mike.content;
            tango = zulu.bind(entity)(mike);
            mike = null;
            mike = mike != tango;
            if(!mike) { _fun123941_ip = 58; continue _fun123941 }
 47:
            report = tango.length;
            zulu = 0;
            mike = zulu !== report;
 58:
            if(!mike) { _fun123941_ip = 80; continue _fun123941 }
 61:
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun123942: for(var _fun123942_ip = 0; ; ) switch(_fun123942_ip) {
 0:
                    entity = argFoo;
                    options = entity.type;
                    oscar = entity.code;
                    var _closure3_slot0 = oscar;
                    tango = _closure1_slot0;
                    entity = _closure1_slot2;
                    golf = 9;
                    zulu = entity[golf];
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.INVITE;
                    if(!(options !== zulu)) { _fun123942_ip = 722; continue _fun123942 }
 63:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.TEMPLATE;
                    if(!(options !== zulu)) { _fun123942_ip = 673; continue _fun123942 }
 99:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.BUILD_OVERRIDE;
                    if(!(options !== zulu)) { _fun123942_ip = 769; continue _fun123942 }
 135:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.MANUAL_BUILD_OVERRIDE;
                    if(!(options !== zulu)) { _fun123942_ip = 769; continue _fun123942 }
 171:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.EVENT;
                    if(!(options !== zulu)) { _fun123942_ip = 769; continue _fun123942 }
 207:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.CHANNEL_LINK;
                    if(!(options !== zulu)) { _fun123942_ip = 769; continue _fun123942 }
 243:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.APP_DIRECTORY_PROFILE;
                    if(!(options !== zulu)) { _fun123942_ip = 640; continue _fun123942 }
 279:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.ACTIVITY_BOOKMARK;
                    if(!(options !== zulu)) { _fun123942_ip = 769; continue _fun123942 }
 315:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.EMBEDDED_ACTIVITY_INVITE;
                    if(!(options !== zulu)) { _fun123942_ip = 769; continue _fun123942 }
 351:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.GUILD_PRODUCT;
                    if(!(options !== zulu)) { _fun123942_ip = 769; continue _fun123942 }
 387:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.SERVER_SHOP;
                    if(!(options !== zulu)) { _fun123942_ip = 769; continue _fun123942 }
 423:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.QUESTS_EMBED;
                    if(!(options !== zulu)) { _fun123942_ip = 769; continue _fun123942 }
 459:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.APP_DIRECTORY_STOREFRONT;
                    if(!(options !== zulu)) { _fun123942_ip = 769; continue _fun123942 }
 495:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.APP_DIRECTORY_STOREFRONT_SKU;
                    if(!(options !== zulu)) { _fun123942_ip = 769; continue _fun123942 }
 531:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.APP_OAUTH2_LINK;
                    if(!(options !== zulu)) { _fun123942_ip = 769; continue _fun123942 }
 567:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    zulu = tango.bind(entity)(zulu);
                    zulu = zulu.CodedLinkType;
                    zulu = zulu.COLLECTIBLES_SHOP;
                    if(!(options !== zulu)) { _fun123942_ip = 769; continue _fun123942 }
 603:
                    zulu = global;
                    tango = zulu.Error;
                    zulu = zulu.HermesInternal;
                    golf = zulu.concat;
                    zulu = 'Unknown coded link type: ';
                    zulu = golf.bind(zulu)(options);
                    zulu = tango.bind(entity)(zulu);
                    throw zulu;
 640:
                    tango = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 14;
                    zulu = golf[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.getEmbedApplication;
                    zulu = zulu.bind(tango)(oscar);
                    _fun123942_ip = 769; continue _fun123942;
 673:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 10;
                    zulu = oscar[zulu];
                    oscar = tango.bind(entity)(zulu);
                    tango = oscar.queueMessageLinkFetch;
                    golf = _closure1_slot8;
                    zulu = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun123947: for(var _fun123947_ip = 0; ; ) switch(_fun123947_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(mike) { _fun123947_ip = 93; continue _fun123947 }
 7:
                                oscar = _closure1_slot9;
                                report = oscar.getGuildTemplate;
                                tango = _closure3_slot0;
                                report = report.bind(oscar)(tango);
                                tango = null;
                                if(!(tango == report)) { _fun123947_ip = 85; continue _fun123947 }
 38:
                                report = _closure1_slot1;
                                tango = _closure1_slot2;
                                zulu = 13;
                                tango = tango[zulu];
                                zulu = undefined;
                                tango = report.bind(zulu)(tango);
                                zulu = tango.resolveGuildTemplate;
                                mike = _closure3_slot0;
                                mike = zulu.bind(tango)(mike);
                                SaveGenerator(address=79);
 77:
                                return mike;
 79:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(zulu) { _fun123947_ip = 90; continue _fun123947 }
 85:
                                zulu = undefined;
                                return zulu;
 90:
                                return mike;
 93:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    zulu = golf.bind(entity)(zulu);
                    zulu = tango.bind(oscar)(zulu);
                    _fun123942_ip = 769; continue _fun123942;
 722:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 10;
                    zulu = oscar[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.queueMessageLinkFetch;
                    report = _closure1_slot8;
                    mike = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun123944: for(var _fun123944_ip = 0; ; ) switch(_fun123944_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(mike) { _fun123944_ip = 145; continue _fun123944 }
 10:
                                oscar = _closure1_slot10;
                                report = oscar.getInvite;
                                tango = _closure3_slot0;
                                report = report.bind(oscar)(tango);
                                tango = null;
                                if(!(tango == report)) { _fun123944_ip = 137; continue _fun123944 }
 41:
                                report = _closure1_slot1;
                                oscar = _closure1_slot2;
                                mike = 11;
                                mike = oscar[mike];
                                tango = undefined;
                                options = report.bind(tango)(mike);
                                golf = options.dispatch;
                                mike = {};
                                verify = 'INVITE_RESOLVE';
                                mike['type'] = verify;
                                zulu = _closure3_slot0;
                                mike['code'] = zulu;
                                mike = golf.bind(options)(mike);
                                mike = 12;
                                mike = oscar[mike];
                                mike = report.bind(tango)(mike);
                                tango = mike.bind(tango)(zulu);
                                zulu = tango.then;
                                mike = function(argFoo) {
                                    _fun123945: for(var _fun123945_ip = 0; ; ) switch(_fun123945_ip) {
 0:
                                        entity = argFoo;
                                        report = entity.invite;
                                        tango = entity.code;
                                        oscar = entity.banned;
                                        entity = null;
                                        if(!(entity == report)) { _fun123945_ip = 84; continue _fun123945 }
 26:
                                        zulu = _closure1_slot1;
                                        mike = _closure1_slot2;
                                        entity = 11;
                                        mike = mike[entity];
                                        entity = undefined;
                                        zulu = zulu.bind(entity)(mike);
                                        mike = zulu.dispatch;
                                        entity = {};
                                        golf = 'INVITE_RESOLVE_FAILURE';
                                        entity['type'] = golf;
                                        entity['code'] = tango;
                                        entity['banned'] = oscar;
                                        entity = mike.bind(zulu)(entity);
                                        _fun123945_ip = 138; continue _fun123945;
 84:
                                        zulu = _closure1_slot1;
                                        mike = _closure1_slot2;
                                        entity = 11;
                                        mike = mike[entity];
                                        entity = undefined;
                                        zulu = zulu.bind(entity)(mike);
                                        mike = zulu.dispatch;
                                        entity = {};
                                        oscar = 'INVITE_RESOLVE_SUCCESS';
                                        entity['type'] = oscar;
                                        entity['invite'] = report;
                                        entity['code'] = tango;
                                        entity = mike.bind(zulu)(entity);
 138:
                                        entity = undefined;
                                        return entity;
                                    }
                                };
                                mike = zulu.bind(tango)(mike);
                                SaveGenerator(address=131);
 129:
                                return mike;
 131:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                if(zulu) { _fun123944_ip = 142; continue _fun123944 }
 137:
                                zulu = undefined;
                                return zulu;
 142:
                                return mike;
 145:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    mike = report.bind(entity)(mike);
                    mike = zulu.bind(tango)(mike);
 769:
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
 80:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 16;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function() { // Original name: MessageCodedLinkManager
            report = this;
            entity = _closure1_slot4;
            zulu = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(report, zulu);
            entity = _closure1_slot11;
            entity = entity.bind(tango)(report, zulu);
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 15;
            zulu = oscar[zulu];
            zulu = report.bind(tango)(zulu);
            mike = _closure1_slot13;
            mike = zulu.bind(tango)(entity, mike);
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot7;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot3;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 17;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/coded_links/MessageCodedLinkManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
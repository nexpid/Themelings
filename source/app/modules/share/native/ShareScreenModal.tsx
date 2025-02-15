// app/modules/share/native/ShareScreenModal.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
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
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SHARE_SCREEN_MODAL_KEY;
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.Logger;
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'ShareScreenModal';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot10 = tango;
    tango = function() { // Original name: onClose
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 8;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.popWithKey;
        mike = _closure1_slot8;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot11 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/share/native/ShareScreenModal.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ShareScreenModal
        _fun107591: for(var _fun107591_ip = 0; ; ) switch(_fun107591_ip) {
 0:
            mike = argFoo;
            offset = mike.text;
            var _closure2_slot0 = offset;
            options = mike.channelId;
            var _closure2_slot1 = options;
            sizing = mike.shareId;
            var _closure2_slot2 = sizing;
            mike = mike.attachmentManifest;
            var _closure2_slot3 = mike;
            tango = undefined;
            var _closure2_slot8 = tango;
            foxtrot = _closure1_slot5;
            oscar = foxtrot.useState;
            zulu = null;
            oscar = oscar.bind(foxtrot)(zulu);
            backup = _closure1_slot4;
            romeo = 2;
            oscar = backup.bind(tango)(oscar, romeo);
            golf = 0;
            verify = oscar[golf];
            var _closure2_slot4 = verify;
            yankee = 1;
            oscar = oscar[yankee];
            var _closure2_slot5 = oscar;
            kilo = foxtrot.useEffect;
            oscar = new Array(2);
            oscar[0] = sizing;
            oscar[1] = mike;
            mike = function() {
                mike = function() { // Original name: _fetchAttachments
                    tango = undefined;
                    entity = undefined;
                    zulu = _closure1_slot3;
                    mike = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun107595: for(var _fun107595_ip = 0; ; ) switch(_fun107595_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(mike) { _fun107595_ip = 116; continue _fun107595 }
 7:
                                zulu = _closure2_slot2;
                                mike = undefined;
                                if(!(mike !== zulu)) { _fun107595_ip = 113; continue _fun107595 }
 20:
                                zulu = _closure2_slot3;
                                if(!(mike !== zulu)) { _fun107595_ip = 113; continue _fun107595 }
 28: // try_start_0
                                zulu = _closure1_slot6;
                                golf = zulu.ShareManager;
                                oscar = golf.sharedAttachments;
                                report = _closure2_slot2;
                                zulu = _closure2_slot3;
                                zulu = oscar.bind(golf)(report, zulu);
                                SaveGenerator(address=67);
 65:
                                return zulu;
 67:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                                if(report) { _fun107595_ip = 84; continue _fun107595 }
 73:
                                tango = _closure2_slot5;
                                tango = tango.bind(mike)(zulu);
 82: // try_end0
                                _fun107595_ip = 113; continue _fun107595;
 84:
                                return zulu;
 87: // catch_target0
                                CatchBlockStart(arg_register=5);
                                report = _closure1_slot10;
                                tango = report.error;
                                zulu = 'Error fetching attachments:';
                                zulu = tango.bind(report)(zulu, oscar);
 113:
                                return mike;
 116:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    tango = zulu.bind(tango)(mike);
                    _closure3_slot0 = tango;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                var _closure3_slot0 = mike;
                mike = function() { // Original name: fetchAttachments
                    entity = undefined;
                    tango = _closure3_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                entity = undefined;
                mike = mike.bind(entity)();
                mike = !mike;
                return entity;
            };
            mike = kilo.bind(foxtrot)(mike, oscar);
            oscar = _closure1_slot0;
            kilo = _closure1_slot2;
            mike = 9;
            mike = kilo[mike];
            sizing = oscar.bind(tango)(mike);
            kilo = sizing.useStateFromStores;
            mike = _closure1_slot7;
            oscar = new Array(1);
            oscar[0] = mike;
            mike = function() {
                zulu = _closure1_slot7;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = kilo.bind(sizing)(oscar, mike);
            var _closure2_slot6 = mike;
            oscar = foxtrot.useState;
            oscar = oscar.bind(foxtrot)(zulu);
            oscar = backup.bind(tango)(oscar, romeo);
            golf = oscar[golf];
            oscar = oscar[yankee];
            var _closure2_slot7 = oscar;
            romeo = foxtrot.useEffect;
            yankee = new Array(2);
            yankee[0] = options;
            yankee[1] = mike;
            oscar = function() {
                mike = function() { // Original name: _fetchChannel
                    tango = undefined;
                    entity = undefined;
                    zulu = _closure1_slot3;
                    mike = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun107601: for(var _fun107601_ip = 0; ; ) switch(_fun107601_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(mike) { _fun107601_ip = 123; continue _fun107601 }
 7:
                                mike = _closure2_slot1;
                                tango = null;
                                if(!(tango != mike)) { _fun107601_ip = 118; continue _fun107601 }
 20:
                                mike = _closure2_slot6;
                                if(!(tango == mike)) { _fun107601_ip = 118; continue _fun107601 }
 28: // try_start_0
                                report = _closure1_slot1;
                                tango = _closure1_slot2;
                                mike = 10;
                                mike = tango[mike];
                                tango = undefined;
                                oscar = report.bind(tango)(mike);
                                report = oscar.fetchChannel;
                                mike = _closure2_slot1;
                                mike = report.bind(oscar)(mike);
                                SaveGenerator(address=72);
 70:
                                return mike;
 72:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(report) { _fun107601_ip = 89; continue _fun107601 }
 78:
                                zulu = _closure2_slot7;
                                zulu = zulu.bind(tango)(mike);
 87: // try_end0
                                _fun107601_ip = 118; continue _fun107601;
 89:
                                return mike;
 92: // catch_target0
                                CatchBlockStart(arg_register=4);
                                tango = _closure1_slot10;
                                zulu = tango.error;
                                mike = 'Error fetching channel:';
                                mike = zulu.bind(tango)(mike, report);
 118:
                                mike = undefined;
                                return mike;
 123:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    tango = zulu.bind(tango)(mike);
                    _closure3_slot0 = tango;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                var _closure3_slot0 = mike;
                mike = function() { // Original name: fetchChannel
                    entity = undefined;
                    tango = _closure3_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                entity = undefined;
                mike = mike.bind(entity)();
                mike = !mike;
                return entity;
            };
            oscar = romeo.bind(foxtrot)(oscar, yankee);
            if(!(zulu != mike)) { _fun107591_ip = 251; continue _fun107591 }
 248:
            golf = mike;
 251:
            _closure2_slot8 = golf;
            oscar = _closure1_slot5;
            zulu = oscar.useMemo;
            mike = new Array(4);
            mike[0] = offset;
            mike[1] = verify;
            mike[2] = options;
            mike[3] = golf;
            entity = function() {
                _fun107603: for(var _fun107603_ip = 0; ; ) switch(_fun107603_ip) {
 0:
                    entity = {};
                    zulu = _closure2_slot0;
                    entity['text'] = zulu;
                    zulu = _closure2_slot4;
                    report = null;
                    if(!(report == zulu)) { _fun107603_ip = 29; continue _fun107603 }
 23:
                    zulu = new Array(0);
                    _fun107603_ip = 33; continue _fun107603;
 29:
                    zulu = _closure2_slot4;
 33:
                    entity['attachments'] = zulu;
                    zulu = _closure2_slot8;
                    if(!(report != zulu)) { _fun107603_ip = 253; continue _fun107603 }
 49:
                    zulu = _closure2_slot8;
                    oscar = zulu.type;
                    golf = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 11;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = golf.bind(zulu)(tango);
                    tango = tango.ChannelTypes;
                    tango = tango.DM;
                    if(!(oscar === tango)) { _fun107603_ip = 241; continue _fun107603 }
 102:
                    tango = _closure2_slot8;
                    if(!tango) { _fun107603_ip = 147; continue _fun107603 }
 109:
                    oscar = 'recipients';
                    oscar = oscar in tango;
                    if(!oscar) { _fun107603_ip = 147; continue _fun107603 }
 120:
                    oscar = global;
                    golf = oscar.Array;
                    oscar = golf.isArray;
                    tango = tango.recipients;
                    tango = oscar.bind(golf)(tango);
                    if(tango) { _fun107603_ip = 217; continue _fun107603 }
 147:
                    oscar = _closure2_slot8;
                    tango = oscar;
                    if(!tango) { _fun107603_ip = 165; continue _fun107603 }
 157:
                    golf = 'recipient';
                    tango = golf in oscar;
 165:
                    if(!tango) { _fun107603_ip = 182; continue _fun107603 }
 168:
                    golf = oscar.recipient;
                    oscar = 'id';
                    tango = oscar in golf;
 182:
                    if(!tango) { _fun107603_ip = 239; continue _fun107603 }
 185:
                    tango = _closure2_slot8;
                    tango = tango.recipient;
                    report = report == tango;
                    zulu = undefined;
                    if(report) { _fun107603_ip = 209; continue _fun107603 }
 204:
                    zulu = tango.id;
 209:
                    entity['targetUserId'] = zulu;
                    _fun107603_ip = 239; continue _fun107603;
 217:
                    zulu = _closure2_slot8;
                    tango = zulu.recipients;
                    zulu = 0;
                    zulu = tango[zulu];
                    entity['targetUserId'] = zulu;
 239:
                    return entity;
 241:
                    mike = _closure2_slot1;
                    entity['targetChannelId'] = mike;
                    return entity;
 253:
                    return entity;
                }
            };
            oscar = zulu.bind(oscar)(entity, mike);
            zulu = _closure1_slot9;
            mike = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 12;
            entity = golf[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['sharedContent'] = oscar;
            report = _closure1_slot11;
            entity['onClose'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();
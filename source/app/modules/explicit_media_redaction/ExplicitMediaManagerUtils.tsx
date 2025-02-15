// app/modules/explicit_media_redaction/ExplicitMediaManagerUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    zulu = argFred;
    options = argPlugh;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun58655: for(var _fun58655_ip = 0; ; ) switch(_fun58655_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun58655_ip = 46; continue _fun58655 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun58655_ip = 55; continue _fun58655 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun58655_ip = 343; continue _fun58655 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun58655_ip = 323; continue _fun58655 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun58655_ip = 283; continue _fun58655 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun58655_ip = 270; continue _fun58655 }
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
            if(!golf) { _fun58655_ip = 163; continue _fun58655 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun58655_ip = 179; continue _fun58655 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun58655_ip = 249; continue _fun58655 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun58655_ip = 249; continue _fun58655 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun58655_ip = 234; continue _fun58655 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun58655_ip = 247; continue _fun58655 }
 234:
            verify = _closure1_slot3;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun58655_ip = 265; continue _fun58655;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun58655_ip = 283; continue _fun58655;
 270:
            golf = _closure1_slot3;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun58655_ip = 323; continue _fun58655 }
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
            if(!tango) { _fun58655_ip = 330; continue _fun58655 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun58656: for(var _fun58656_ip = 0; ; ) switch(_fun58656_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun58656_ip = 56; continue _fun58656 }
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
                    _fun58656_ip = 67; continue _fun58656;
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
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot2 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun58657: for(var _fun58657_ip = 0; ; ) switch(_fun58657_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun58657_ip = 23; continue _fun58657 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun58657_ip = 33; continue _fun58657 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun58657_ip = 70; continue _fun58657 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun58657_ip = 55; continue _fun58657 }
 70:
            return entity;
        }
    };
    var _closure1_slot3 = entity;
    entity = function(argFoo) { // Original name: hasAttachmentsOrEmbeds
        _fun58658: for(var _fun58658_ip = 0; ; ) switch(_fun58658_ip) {
 0:
            zulu = argFoo;
            entity = zulu.attachments;
            tango = null;
            entity = tango != entity;
            if(!entity) { _fun58658_ip = 35; continue _fun58658 }
 18:
            mike = zulu.attachments;
            report = mike.length;
            mike = 0;
            entity = report > mike;
 35:
            if(entity) { _fun58658_ip = 71; continue _fun58658 }
 38:
            mike = zulu.embeds;
            mike = tango != mike;
            if(!mike) { _fun58658_ip = 68; continue _fun58658 }
 51:
            zulu = zulu.embeds;
            tango = zulu.length;
            zulu = 0;
            mike = tango > zulu;
 68:
            entity = mike;
 71:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = function(argFoo) { // Original name: getContentScanVersionFromEmbed
        _fun58659: for(var _fun58659_ip = 0; ; ) switch(_fun58659_ip) {
 0:
            mike = argFoo;
            zulu = mike.content_scan_version;
            entity = null;
            if(!(entity == zulu)) { _fun58659_ip = 38; continue _fun58659 }
 15:
            zulu = mike.contentScanVersion;
            zulu = entity != zulu;
            entity = null;
            if(!zulu) { _fun58659_ip = 36; continue _fun58659 }
 30:
            entity = mike.contentScanVersion;
 36:
            _fun58659_ip = 44; continue _fun58659;
 38:
            entity = mike.content_scan_version;
 44:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    oscar = function(argFoo, argBar) { // Original name: shouldScanAttachment
        _fun58660: for(var _fun58660_ip = 0; ; ) switch(_fun58660_ip) {
 0:
            mike = argFoo;
            zulu = argBar;
            entity = mike.content_scan_version;
            tango = null;
            entity = tango == entity;
            if(entity) { _fun58660_ip = 42; continue _fun58660 }
 21:
            mike = mike.content_scan_version;
            if(!(tango == zulu)) { _fun58660_ip = 38; continue _fun58660 }
 31:
            zulu = _closure1_slot1;
 38:
            entity = mike < zulu;
 42:
            return entity;
        }
    };
    var _closure1_slot6 = oscar;
    report = function(argFoo, argBar) { // Original name: shouldScanEmbed
        _fun58661: for(var _fun58661_ip = 0; ; ) switch(_fun58661_ip) {
 0:
            oscar = argFoo;
            zulu = argBar;
            tango = oscar.video;
            report = null;
            golf = report == tango;
            mike = undefined;
            entity = undefined;
            if(golf) { _fun58661_ip = 30; continue _fun58661 }
 25:
            entity = tango.width;
 30:
            tango = 0;
            if(!(tango === entity)) { _fun58661_ip = 63; continue _fun58661 }
 36:
            golf = oscar.video;
            options = report == golf;
            entity = undefined;
            if(options) { _fun58661_ip = 56; continue _fun58661 }
 51:
            entity = golf.height;
 56:
            if(!(tango !== entity)) { _fun58661_ip = 249; continue _fun58661 }
 63:
            golf = oscar.thumbnail;
            options = report == golf;
            entity = undefined;
            if(options) { _fun58661_ip = 83; continue _fun58661 }
 78:
            entity = golf.width;
 83:
            if(!(tango === entity)) { _fun58661_ip = 114; continue _fun58661 }
 87:
            golf = oscar.thumbnail;
            options = report == golf;
            entity = undefined;
            if(options) { _fun58661_ip = 107; continue _fun58661 }
 102:
            entity = golf.height;
 107:
            if(!(tango !== entity)) { _fun58661_ip = 245; continue _fun58661 }
 114:
            golf = oscar.image;
            options = report == golf;
            entity = undefined;
            if(options) { _fun58661_ip = 134; continue _fun58661 }
 129:
            entity = golf.width;
 134:
            if(!(tango === entity)) { _fun58661_ip = 162; continue _fun58661 }
 138:
            golf = oscar.image;
            options = report == golf;
            entity = undefined;
            if(options) { _fun58661_ip = 158; continue _fun58661 }
 153:
            entity = golf.height;
 158:
            if(!(tango !== entity)) { _fun58661_ip = 241; continue _fun58661 }
 162:
            entity = 'images';
            entity = entity in oscar;
            if(!entity) { _fun58661_ip = 204; continue _fun58661 }
 173:
            golf = oscar.images;
            if(!(report != golf)) { _fun58661_ip = 204; continue _fun58661 }
 183:
            tango = golf.some;
            entity = function(argFoo) {
                _fun58662: for(var _fun58662_ip = 0; ; ) switch(_fun58662_ip) {
 0:
                    mike = argFoo;
                    entity = mike.width;
                    zulu = 0;
                    entity = zulu === entity;
                    if(!entity) { _fun58662_ip = 26; continue _fun58662 }
 17:
                    mike = mike.height;
                    entity = zulu === mike;
 26:
                    return entity;
                }
            };
            entity = tango.bind(golf)(entity);
            if(entity) { _fun58661_ip = 237; continue _fun58661 }
 204:
            entity = _closure1_slot5;
            mike = entity.bind(mike)(oscar);
            entity = report == mike;
            if(entity) { _fun58661_ip = 235; continue _fun58661 }
 223:
            if(!(report == zulu)) { _fun58661_ip = 231; continue _fun58661 }
 227:
            zulu = _closure1_slot1;
 231:
            entity = mike < zulu;
 235:
            return entity;
 237:
            entity = false;
            return entity;
 241:
            entity = false;
            return entity;
 245:
            entity = false;
            return entity;
 249:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot7 = report;
    entity = function(argFoo) { // Original name: isAttachmentUnscannedForTimeout
        entity = argFoo;
        mike = entity.content_scan_version;
        entity = null;
        entity = entity == mike;
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: isEmbedUnscannedForTimeout
        _fun58664: for(var _fun58664_ip = 0; ; ) switch(_fun58664_ip) {
 0:
            golf = argFoo;
            entity = _closure1_slot5;
            verify = undefined;
            oscar = entity.bind(verify)(golf);
            mike = golf.video;
            report = null;
            zulu = report == mike;
            entity = undefined;
            if(zulu) { _fun58664_ip = 39; continue _fun58664 }
 34:
            entity = mike.width;
 39:
            options = 0;
            entity = options !== entity;
            if(entity) { _fun58664_ip = 72; continue _fun58664 }
 48:
            zulu = golf.video;
            tango = report == zulu;
            mike = undefined;
            if(tango) { _fun58664_ip = 68; continue _fun58664 }
 63:
            mike = zulu.height;
 68:
            entity = options !== mike;
 72:
            if(!entity) { _fun58664_ip = 255; continue _fun58664 }
 78:
            zulu = golf.thumbnail;
            tango = report == zulu;
            mike = undefined;
            if(tango) { _fun58664_ip = 98; continue _fun58664 }
 93:
            mike = zulu.width;
 98:
            mike = options !== mike;
            if(mike) { _fun58664_ip = 129; continue _fun58664 }
 105:
            tango = golf.thumbnail;
            offset = report == tango;
            zulu = undefined;
            if(offset) { _fun58664_ip = 125; continue _fun58664 }
 120:
            zulu = tango.height;
 125:
            mike = options !== zulu;
 129:
            if(!mike) { _fun58664_ip = 252; continue _fun58664 }
 132:
            tango = golf.image;
            offset = report == tango;
            zulu = undefined;
            if(offset) { _fun58664_ip = 152; continue _fun58664 }
 147:
            zulu = tango.width;
 152:
            zulu = options !== zulu;
            if(zulu) { _fun58664_ip = 183; continue _fun58664 }
 159:
            offset = golf.image;
            yankee = report == offset;
            tango = undefined;
            if(yankee) { _fun58664_ip = 179; continue _fun58664 }
 174:
            tango = offset.height;
 179:
            zulu = options !== tango;
 183:
            if(!zulu) { _fun58664_ip = 249; continue _fun58664 }
 186:
            tango = 'images';
            options = tango in golf;
            tango = !options;
            verify = undefined;
            if(!options) { _fun58664_ip = 215; continue _fun58664 }
 202:
            golf = golf.images;
            tango = report == golf;
            verify = golf;
 215:
            if(tango) { _fun58664_ip = 239; continue _fun58664 }
 218:
            options = verify.some;
            golf = function(argFoo) {
                _fun58665: for(var _fun58665_ip = 0; ; ) switch(_fun58665_ip) {
 0:
                    mike = argFoo;
                    entity = mike.width;
                    zulu = 0;
                    entity = zulu === entity;
                    if(!entity) { _fun58665_ip = 26; continue _fun58665 }
 17:
                    mike = mike.height;
                    entity = zulu === mike;
 26:
                    return entity;
                }
            };
            golf = options.bind(verify)(golf);
            tango = !golf;
 239:
            if(!tango) { _fun58664_ip = 246; continue _fun58664 }
 242:
            tango = report == oscar;
 246:
            zulu = tango;
 249:
            mike = zulu;
 252:
            entity = mike;
 255:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    tango = function(argFoo) { // Original name: getUnscannedAttachmentsAndEmbedIdsForTimeout
        _fun58666: for(var _fun58666_ip = 0; ; ) switch(_fun58666_ip) {
 0:
            mike = argFoo;
            entity = null;
            oscar = entity == mike;
            report = undefined;
            if(oscar) { _fun58666_ip = 36; continue _fun58666 }
 16:
            oscar = mike.attachments;
            golf = entity == oscar;
            report = undefined;
            if(golf) { _fun58666_ip = 36; continue _fun58666 }
 31:
            report = oscar.length;
 36:
            options = entity != report;
            oscar = 0;
            golf = 0;
            if(!options) { _fun58666_ip = 50; continue _fun58666 }
 47:
            golf = report;
 50:
            report = entity == mike;
            options = undefined;
            if(report) { _fun58666_ip = 79; continue _fun58666 }
 59:
            report = mike.embeds;
            verify = entity == report;
            options = undefined;
            if(verify) { _fun58666_ip = 79; continue _fun58666 }
 74:
            options = report.length;
 79:
            verify = entity != options;
            report = 0;
            if(!verify) { _fun58666_ip = 91; continue _fun58666 }
 88:
            report = options;
 91:
            if(!(oscar === golf)) { _fun58666_ip = 102; continue _fun58666 }
 95:
            if(!(oscar !== report)) { _fun58666_ip = 278; continue _fun58666 }
 102:
            report = entity == mike;
            oscar = undefined;
            if(report) { _fun58666_ip = 143; continue _fun58666 }
 111:
            options = mike.attachments;
            report = entity == options;
            oscar = undefined;
            if(report) { _fun58666_ip = 143; continue _fun58666 }
 126:
            golf = options.filter;
            report = _closure1_slot8;
            oscar = golf.bind(options)(report);
 143:
            if(!(entity == oscar)) { _fun58666_ip = 151; continue _fun58666 }
 147:
            oscar = new Array(0);
 151:
            golf = entity == mike;
            report = undefined;
            if(golf) { _fun58666_ip = 192; continue _fun58666 }
 160:
            golf = mike.embeds;
            mike = entity == golf;
            report = undefined;
            if(mike) { _fun58666_ip = 192; continue _fun58666 }
 175:
            tango = golf.filter;
            mike = _closure1_slot9;
            report = tango.bind(golf)(mike);
 192:
            if(!(entity == report)) { _fun58666_ip = 200; continue _fun58666 }
 196:
            report = new Array(0);
 200:
            entity = {};
            tango = oscar.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            golf = tango.bind(oscar)(mike);
            oscar = golf.filter;
            mike = global;
            tango = mike.Boolean;
            tango = oscar.bind(golf)(tango);
            entity['attachmentIds'] = tango;
            tango = report.map;
            zulu = function(argFoo, argBar) {
                entity = global;
                entity = entity.HermesInternal;
                zulu = entity.concat;
                mike = 'embed_';
                entity = argBar;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            tango = tango.bind(report)(zulu);
            zulu = tango.filter;
            mike = mike.Boolean;
            mike = zulu.bind(tango)(mike);
            entity['embedIds'] = mike;
            return entity;
 278:
            entity = {};
            mike = new Array(0);
            entity['attachmentIds'] = mike;
            mike = new Array(0);
            entity['embedIds'] = mike;
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, golf);
    entity = 0;
    verify = options[entity];
    golf = argBaz;
    entity = undefined;
    golf = golf.bind(entity)(verify);
    var _closure1_slot0 = golf;
    golf = 1;
    var _closure1_slot1 = golf;
    options = options[golf];
    golf = argBar;
    verify = golf.bind(entity)(options);
    options = verify.fileFinishedImporting;
    golf = 'modules/explicit_media_redaction/ExplicitMediaManagerUtils.tsx';
    golf = options.bind(verify)(golf);
    golf = function(argFoo) { // Original name: hasAttachmentsEmbedsOrSnapshots
        _fun58669: for(var _fun58669_ip = 0; ; ) switch(_fun58669_ip) {
 0:
            mike = argFoo;
            tango = null;
            if(!(tango != mike)) { _fun58669_ip = 93; continue _fun58669 }
 9:
            entity = 'messageSnapshots';
            entity = entity in mike;
            if(entity) { _fun58669_ip = 28; continue _fun58669 }
 20:
            oscar = mike.message_snapshots;
            _fun58669_ip = 34; continue _fun58669;
 28:
            oscar = mike.messageSnapshots;
 34:
            entity = _closure1_slot4;
            zulu = undefined;
            entity = entity.bind(zulu)(mike);
            if(entity) { _fun58669_ip = 91; continue _fun58669 }
 51:
            mike = tango != oscar;
            if(!mike) { _fun58669_ip = 88; continue _fun58669 }
 58:
            tango = tango == oscar;
            zulu = undefined;
            if(tango) { _fun58669_ip = 85; continue _fun58669 }
 67:
            report = oscar.some;
            tango = function(argFoo) {
                zulu = _closure1_slot4;
                entity = argFoo;
                mike = entity.message;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                return entity;
            };
            zulu = report.bind(oscar)(tango);
 85:
            mike = zulu;
 88:
            entity = mike;
 91:
            return entity;
 93:
            entity = false;
            return entity;
        }
    };
    zulu['hasAttachmentsEmbedsOrSnapshots'] = golf;
    golf = function() { // Original name: getValidContentScanVersion
        _fun58671: for(var _fun58671_ip = 0; ; ) switch(_fun58671_ip) {
 0:
            entity = _closure1_slot0;
            entity = entity.validContentScanVersion;
            zulu = null;
            if(!(zulu == entity)) { _fun58671_ip = 23; continue _fun58671 }
 19:
            entity = _closure1_slot1;
 23:
            return entity;
        }
    };
    zulu['getValidContentScanVersion'] = golf;
    zulu['shouldScanAttachment'] = oscar;
    zulu['shouldScanEmbed'] = report;
    report = function(argFoo) { // Original name: hasAttachmentsOrEmbedsRequiringScan
        _fun58672: for(var _fun58672_ip = 0; ; ) switch(_fun58672_ip) {
 0:
            entity = argFoo;
            tango = entity.attachments;
            oscar = null;
            if(!(oscar != tango)) { _fun58672_ip = 39; continue _fun58672 }
 15:
            zulu = tango.some;
            mike = _closure1_slot6;
            mike = zulu.bind(tango)(mike);
            if(mike) { _fun58672_ip = 245; continue _fun58672 }
 39:
            tango = entity.embeds;
            if(!(oscar != tango)) { _fun58672_ip = 73; continue _fun58672 }
 49:
            zulu = tango.some;
            mike = _closure1_slot7;
            mike = zulu.bind(tango)(mike);
            if(mike) { _fun58672_ip = 245; continue _fun58672 }
 73:
            mike = 'messageSnapshots';
            mike = mike in entity;
            if(mike) { _fun58672_ip = 92; continue _fun58672 }
 84:
            mike = entity.message_snapshots;
            _fun58672_ip = 98; continue _fun58672;
 92:
            mike = entity.messageSnapshots;
 98:
            if(!(oscar != mike)) { _fun58672_ip = 241; continue _fun58672 }
 105:
            zulu = mike.length;
            entity = 0;
            if(!(entity !== zulu)) { _fun58672_ip = 241; continue _fun58672 }
 119:
            entity = _closure1_slot2;
            tango = undefined;
            zulu = entity.bind(tango)(mike);
            mike = zulu.bind(tango)();
            entity = mike.done;
            if(entity) { _fun58672_ip = 237; continue _fun58672 }
 145:
            entity = mike.value;
            golf = entity.message;
            verify = golf.attachments;
            if(!(oscar != verify)) { _fun58672_ip = 183; continue _fun58672 }
 165:
            options = verify.some;
            golf = _closure1_slot6;
            golf = options.bind(verify)(golf);
            if(golf) { _fun58672_ip = 233; continue _fun58672 }
 183:
            entity = entity.message;
            options = entity.embeds;
            if(!(oscar != options)) { _fun58672_ip = 216; continue _fun58672 }
 198:
            golf = options.some;
            entity = _closure1_slot7;
            entity = golf.bind(options)(entity);
            if(entity) { _fun58672_ip = 233; continue _fun58672 }
 216:
            golf = zulu.bind(tango)();
            entity = golf.done;
            mike = golf;
            if(entity) { _fun58672_ip = 237; continue _fun58672 }
 231:
            _fun58672_ip = 145; continue _fun58672;
 233:
            entity = true;
            return entity;
 237:
            entity = false;
            return entity;
 241:
            entity = false;
            return entity;
 245:
            entity = true;
            return entity;
        }
    };
    zulu['hasAttachmentsOrEmbedsRequiringScan'] = report;
    zulu['getUnscannedAttachmentsAndEmbedIdsForTimeout'] = tango;
    mike = function(argFoo) { // Original name: hasUnscannedAttachmentsOrEmbedsForTimeout
        _fun58673: for(var _fun58673_ip = 0; ; ) switch(_fun58673_ip) {
 0:
            zulu = _closure1_slot10;
            mike = undefined;
            entity = argFoo;
            mike = zulu.bind(mike)(entity);
            entity = mike.attachmentIds;
            mike = mike.embedIds;
            entity = entity.length;
            zulu = 0;
            entity = entity > zulu;
            if(entity) { _fun58673_ip = 52; continue _fun58673 }
 43:
            mike = mike.length;
            entity = mike > zulu;
 52:
            return entity;
        }
    };
    zulu['hasUnscannedAttachmentsOrEmbedsForTimeout'] = mike;
    return entity;
})();
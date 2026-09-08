const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function svgData(svg) { return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`; }
function bookCover(title, subject, hue) {
  return svgData(`<svg xmlns="http://www.w3.org/2000/svg" width="280" height="380"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="hsl(${hue} 55% 94%)"/><stop offset="1" stop-color="hsl(${hue} 70% 72%)"/></linearGradient></defs><rect width="280" height="380" fill="url(#g)"/><rect x="14" y="14" width="252" height="352" rx="4" fill="none" stroke="hsl(${hue} 48% 40%)" stroke-width="2"/><circle cx="140" cy="132" r="58" fill="hsl(${hue} 55% 55%)" opacity=".18"/><path d="M78 175 Q140 105 202 175 Q140 226 78 175" fill="hsl(${hue} 54% 45%)" opacity=".2"/><text x="140" y="66" text-anchor="middle" font-family="sans-serif" font-size="17" fill="#425466">同步练习册</text><text x="140" y="258" text-anchor="middle" font-family="sans-serif" font-size="25" font-weight="bold" fill="#22384a">${title}</text><text x="140" y="289" text-anchor="middle" font-family="sans-serif" font-size="16" fill="#526b7c">${subject}</text><rect x="82" y="315" width="116" height="22" rx="11" fill="#fff" opacity=".65"/><text x="140" y="331" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#5c6e7c">名校课堂 · 新版</text></svg>`);
}
function answerPage(index, hue = 211) {
  const lines = Array.from({length: 16}, (_, i) => `<rect x="${i % 4 === 0 ? 82 : 52}" y="${110 + i * 42}" width="${510 - (i % 3) * 50}" height="3" rx="1" fill="#d8dde2"/><text x="55" y="${100 + i * 42}" font-family="serif" font-size="14" fill="#66717b">${i + 1}. ${i % 2 ? '请根据题意完成下列问题，并写出解答过程。' : '填空：________________________'}</text>`).join('');
  return svgData(`<svg xmlns="http://www.w3.org/2000/svg" width="700" height="980"><rect width="700" height="980" fill="#fff"/><rect x="28" y="25" width="644" height="930" fill="none" stroke="#d3d8dc"/><rect x="28" y="25" width="644" height="62" fill="hsl(${hue} 45% 94%)"/><text x="52" y="64" font-family="sans-serif" font-size="22" font-weight="bold" fill="#304657">课后练习答案 · 第 ${index} 页</text><text x="625" y="64" text-anchor="end" font-family="sans-serif" font-size="13" fill="#768593">用户上传原图</text>${lines}<path d="M455 740q55-70 115 0t80 20" fill="none" stroke="hsl(${hue} 55% 52%)" stroke-width="4" opacity=".5"/><text x="615" y="915" text-anchor="end" font-family="serif" font-size="17" fill="#7c8790">${index}</text></svg>`);
}

const books = [
  {id:'UGC2609070018',name:'名校课堂同步练习册',subtitle:'八年级下册',isbn:'9787575424851',grade:'八年级',course:'历史',province:'浙江省',userId:'256039654',uploader:'林溪同学',time:'2026-09-07 20:02',status:'AI审核未通过',remark:'检测到违规内容',aiResult:'单图审核输出 1',hue:12,images:16},
  {id:'UGC2609070017',name:'阳光同学课时优化作业',subtitle:'四年级上册',isbn:'9787107416453',grade:'四年级',course:'语文',province:'江苏省',userId:'1063843067',uploader:'星星妈妈',time:'2026-09-07 19:46',status:'待人工审核',remark:'',aiResult:'整体判断结果 0.92',hue:38,images:18},
  {id:'UGC2609070016',name:'实验班提优训练',subtitle:'九年级全一册',isbn:'9787577433312',grade:'九年级',course:'物理',province:'广东省',userId:'832760142',uploader:'陈知远',time:'2026-09-07 18:21',status:'AI审核未通过',remark:'上传图片非答案内容',aiResult:'单图审核输出 2',hue:148,images:16},
  {id:'UGC2609070015',name:'计算能手每日一练',subtitle:'五年级上册',isbn:'9787568892018',grade:'五年级',course:'数学',province:'四川省',userId:'505120083',uploader:'小麦同学',time:'2026-09-07 17:35',status:'审核通过',remark:'',aiResult:'整体判断结果 0.95',hue:205,images:22},
  {id:'UGC2609070014',name:'新概念英语同步测试',subtitle:'七年级上册',isbn:'9787544988278',grade:'七年级',course:'英语',province:'山东省',userId:'781044592',uploader:'Summer',time:'2026-09-07 16:08',status:'人工审核未通过',remark:'答案图片缺少第 12 页，请补充后重新上传',aiResult:'整体判断结果 0.88',hue:258,images:11},
  {id:'UGC2609070013',name:'课堂作业本',subtitle:'六年级上册',isbn:'9787553694719',grade:'六年级',course:'数学',province:'浙江省',userId:'610552741',uploader:'一叶知秋',time:'2026-09-07 15:42',status:'待人工审核',remark:'',aiResult:'整体判断结果 0.91',hue:325,images:16},
  {id:'UGC2609070012',name:'语文知识集锦',subtitle:'三年级上册',isbn:'9787544560900',grade:'三年级',course:'语文',province:'江苏省',userId:'391527004',uploader:'橙子爸爸',time:'2026-09-07 14:33',status:'审核通过',remark:'',aiResult:'整体判断结果 0.93',hue:50,images:20},
  {id:'UGC2609070011',name:'培优新帮手',subtitle:'八年级上册',isbn:'9787535182722',grade:'八年级',course:'数学',province:'广东省',userId:'294771038',uploader:'晚风',time:'2026-09-07 13:17',status:'AI审核未通过',remark:'审核未通过',aiResult:'整体判断结果 0.73',hue:187,images:16}
];
books.forEach((b, i) => { b.cover = bookCover(b.name.slice(0, 6), `${b.grade} · ${b.course}`, b.hue); b.pages = Array.from({length:b.images}, (_, j) => ({id:`${b.id}-${j+1}`,src:answerPage(j+1,b.hue),rotation:0})); });
let filteredBooks = [...books]; let currentBook = null; let currentImageIndex = 0; let editMode = false; let pendingDecision = null; let draggedIndex = null;
const statusClass = {'AI审核未通过':'rejected','待人工审核':'pending','人工审核未通过':'rejected','审核通过':'passed'};

function renderRows() {
  $('#bookRows').innerHTML = filteredBooks.map(book => `<tr>
    <td><code>${book.id}</code></td>
    <td><div class="book-cell"><img class="cover" src="${book.cover}" alt=""><div><div class="book-name">${book.name}</div><div class="book-sub">${book.subtitle}</div></div></div></td>
    <td>${book.isbn}</td><td>${book.grade}<div class="book-sub">${book.course}</div></td><td>${book.province}</td>
    <td><div class="uploader"><strong>${book.uploader}</strong><span>ID：${book.userId}</span></div></td>
    <td><div class="image-stack">${book.pages.slice(0,3).map(p=>`<img class="mini-page" src="${p.src}" alt="">`).join('')}<span class="image-total">${book.pages.length} 张</span></div></td>
    <td>${book.time.replace(' ','<br>')}</td><td><span class="status ${statusClass[book.status]}">${book.status}</span></td>
    <td class="remark-cell">${book.remark || '—'}</td>
    <td><button class="action-link review-action" data-id="${book.id}">${book.status==='待人工审核'?'审核':'查看'}</button></td></tr>`).join('');
  $('#resultCount').textContent = filteredBooks.length; $('#paginationCount').textContent = filteredBooks.length;
  $$('.review-action').forEach(btn => btn.addEventListener('click', () => openDetail(btn.dataset.id)));
}
function updateSummaries() {
  const count = s => books.filter(b=>b.status===s).length;
  $('#summaryAiRejected').textContent=count('AI审核未通过'); $('#summaryPending').textContent=count('待人工审核');
}
function openDetail(id) {
  currentBook=books.find(b=>b.id===id); if(!currentBook)return; currentImageIndex=0; editMode=false;
  $('#listView').classList.remove('active'); $('#detailView').classList.add('active'); window.scrollTo(0,0);
  $('#detailTitle').textContent=currentBook.name; $('#detailId').textContent=currentBook.id; $('#detailCover').src=currentBook.cover; $('#detailBookName').textContent=`${currentBook.name} · ${currentBook.subtitle}`;
  ['Isbn','Grade','Course','Province','UserId','Uploader','Time'].forEach(k=>$('#detail'+k).textContent=currentBook[k.charAt(0).toLowerCase()+k.slice(1)]);
  const st=$('#detailStatus'); st.textContent=currentBook.status; st.className=`status ${statusClass[currentBook.status]}`;
  const reviewable=currentBook.status==='待人工审核'; const aiRejected=currentBook.status==='AI审核未通过';
  $('#aiResultBox').classList.toggle('failed',aiRejected); $('#aiResultTitle').textContent=aiRejected?'AI 审核未通过':'AI 审核已通过'; $('#aiResultText').textContent=aiRejected?`${currentBook.aiResult}；${currentBook.remark}`:`${currentBook.aiResult}，已进入人工审核流程。`;
  $('#reviewRemark').value=currentBook.remark; $('#reviewRemark').disabled=!reviewable; $('#reviewRemark').placeholder=reviewable?'请输入审核备注或拒绝原因':'暂无人工审核备注';
  $('#toggleEdit').classList.toggle('hidden',!reviewable); $('#viewerToolbar').classList.toggle('hidden',!reviewable); $('#decisionActions').classList.toggle('hidden',!reviewable); $('#autosaveText').innerHTML=reviewable?'<span class="dot"></span> 图片调整自动保存在本次演示中':'当前任务仅支持查看'; setEditMode(false); renderThumbnails();
}
function renderThumbnails() {
  $('#imageCount').textContent=currentBook.pages.length; const grid=$('#thumbnailGrid'); grid.classList.toggle('editing',editMode);
  grid.innerHTML=currentBook.pages.map((page,i)=>{const sideways=Math.abs(page.rotation)%180===90;return `<div class="thumb ${i===currentImageIndex?'selected':''}" draggable="${editMode}" data-index="${i}"><img class="${sideways?'rotated-sideways':''}" style="transform:rotate(${page.rotation}deg) scale(${sideways?'.72':'1'})" src="${page.src}" alt="第 ${i+1} 张答案图片"><span class="thumb-no">${i+1}</span><span class="thumb-drag">⠿</span></div>`;}).join('');
  $$('.thumb').forEach(el=>{
    el.addEventListener('click',()=>{currentImageIndex=Number(el.dataset.index);renderThumbnails();openViewer();});
    el.addEventListener('dragstart',()=>{draggedIndex=Number(el.dataset.index);});
    el.addEventListener('dragover',e=>e.preventDefault());
    el.addEventListener('drop',e=>{e.preventDefault();const to=Number(el.dataset.index);if(draggedIndex===null||draggedIndex===to)return;const [moved]=currentBook.pages.splice(draggedIndex,1);currentBook.pages.splice(to,0,moved);currentImageIndex=to;draggedIndex=null;renderThumbnails();showToast('图片顺序已调整');});
  });
}
function setEditMode(value){editMode=value;$('#editHint').classList.toggle('hidden',!value);$('#toggleEdit').textContent=value?'退出编辑':'编辑图片';if(currentBook)renderThumbnails();}
function openViewer(){const page=currentBook.pages[currentImageIndex];if(!page)return;const sideways=Math.abs(page.rotation)%180===90;$('#viewerImage').src=page.src;$('#viewerImage').style.transform=`rotate(${page.rotation}deg) scale(${sideways?'.78':'1'})`;$('#viewerPosition').textContent=`${currentImageIndex+1} / ${currentBook.pages.length}`;$('#viewerCaption').textContent=`第 ${currentImageIndex+1} 张答案图片 · ${page.rotation===0?'原始方向':`已旋转 ${page.rotation}°`}`;$('#viewerModal').classList.remove('hidden');updateViewerButtons();}
function updateViewerButtons(){const first=currentImageIndex===0,last=currentImageIndex===currentBook.pages.length-1;$('#prevImage').disabled=first;$('#nextImage').disabled=last;$('#movePrev').disabled=first;$('#moveNext').disabled=last;}
function moveImage(delta){const to=currentImageIndex+delta;if(to<0||to>=currentBook.pages.length)return;const [moved]=currentBook.pages.splice(currentImageIndex,1);currentBook.pages.splice(to,0,moved);currentImageIndex=to;renderThumbnails();openViewer();showToast('图片顺序已调整');}
function rotateImage(delta){const page=currentBook.pages[currentImageIndex];if(!page)return;page.rotation=(page.rotation+delta+360)%360;renderThumbnails();openViewer();showToast(page.rotation===0?'已恢复图片原始方向':`图片已旋转至 ${page.rotation}°`);}
function showToast(message){$('#toast p').textContent=message;$('#toast').classList.remove('hidden');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>$('#toast').classList.add('hidden'),2200);}
function showConfirm(type){pendingDecision=type;const pass=type==='pass';$('#confirmIcon').textContent=pass?'✓':'×';$('#confirmIcon').className=`confirm-icon ${pass?'':'reject'}`;$('#confirmTitle').textContent=pass?'确认通过审核？':'确认拒绝该图书？';$('#confirmText').textContent=pass?`通过后将把“${currentBook.uploader}”记录为图书上传者。`:'拒绝后将同步状态给 C 端，请确认审核备注已填写。';$('#submitConfirm').textContent=pass?'确认通过':'确认拒绝';$('#submitConfirm').className=`btn ${pass?'success':'danger'}`;$('#confirmModal').classList.remove('hidden');}

$('#filterForm').addEventListener('submit',e=>{e.preventDefault();const val=id=>$(id).value.trim();filteredBooks=books.filter(b=>(!val('#filterId')||b.id.includes(val('#filterId')))&&(!val('#filterIsbn')||b.isbn.includes(val('#filterIsbn')))&&(!val('#filterName')||b.name.includes(val('#filterName')))&&(!val('#filterUserId')||b.userId.includes(val('#filterUserId')))&&(!val('#filterUploader')||b.uploader.includes(val('#filterUploader')))&&(!val('#filterStatus')||b.status===val('#filterStatus'))&&(!val('#filterGrade')||b.grade===val('#filterGrade'))&&(!val('#filterCourse')||b.course===val('#filterCourse'))&&(!val('#filterProvince')||b.province===val('#filterProvince')));renderRows();showToast(`已查询到 ${filteredBooks.length} 条任务`);});
$('#resetFilters').addEventListener('click',()=>{$('#filterForm').reset();filteredBooks=[...books];renderRows();});
$('#collapseFilters').addEventListener('click',()=>{$('#filterForm').classList.toggle('hidden');$('#collapseFilters').innerHTML=$('#filterForm').classList.contains('hidden')?'展开条件 <span>⌄</span>':'收起条件 <span>⌃</span>';});
$('#refreshTable').addEventListener('click',()=>{renderRows();showToast('列表已刷新');});
$('#backToList').addEventListener('click',()=>{$('#detailView').classList.remove('active');$('#listView').classList.add('active');renderRows();updateSummaries();});
$('#toggleEdit').addEventListener('click',()=>setEditMode(!editMode)); $('#finishEdit').addEventListener('click',()=>setEditMode(false));
$$('[data-close-modal]').forEach(el=>el.addEventListener('click',()=>$('#viewerModal').classList.add('hidden')));
$('#prevImage').addEventListener('click',()=>{if(currentImageIndex>0){currentImageIndex--;renderThumbnails();openViewer();}}); $('#nextImage').addEventListener('click',()=>{if(currentImageIndex<currentBook.pages.length-1){currentImageIndex++;renderThumbnails();openViewer();}});
$('#movePrev').addEventListener('click',()=>moveImage(-1)); $('#moveNext').addEventListener('click',()=>moveImage(1));
$('#rotateLeft').addEventListener('click',()=>rotateImage(-90)); $('#rotateRight').addEventListener('click',()=>rotateImage(90)); $('#resetRotation').addEventListener('click',()=>{const page=currentBook.pages[currentImageIndex];if(!page||page.rotation===0)return;page.rotation=0;renderThumbnails();openViewer();showToast('已恢复图片原始方向');});
$('#deleteImage').addEventListener('click',()=>{if(currentBook.pages.length<=1)return;currentBook.pages.splice(currentImageIndex,1);currentImageIndex=Math.min(currentImageIndex,currentBook.pages.length-1);renderThumbnails();openViewer();showToast('图片已删除');});
$('#passBook').addEventListener('click',()=>showConfirm('pass')); $('#rejectBook').addEventListener('click',()=>{if(!$('#reviewRemark').value.trim()){showToast('请先填写拒绝原因');$('#reviewRemark').focus();return;}showConfirm('reject');});
$('#cancelConfirm').addEventListener('click',()=>$('#confirmModal').classList.add('hidden')); $('#submitConfirm').addEventListener('click',()=>{currentBook.status=pendingDecision==='pass'?'审核通过':'人工审核未通过';currentBook.remark=pendingDecision==='pass'?'':$('#reviewRemark').value.trim();$('#confirmModal').classList.add('hidden');const st=$('#detailStatus');st.textContent=currentBook.status;st.className=`status ${statusClass[currentBook.status]}`;$('#reviewRemark').disabled=true;$('#toggleEdit').classList.add('hidden');$('#viewerToolbar').classList.add('hidden');$('#decisionActions').classList.add('hidden');$('#autosaveText').textContent='当前任务仅支持查看';setEditMode(false);updateSummaries();showToast(pendingDecision==='pass'?`审核通过，已记录图书上传者：${currentBook.uploader}`:'人工审核未通过，已记录审核备注');});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('#viewerModal').classList.add('hidden');$('#confirmModal').classList.add('hidden');}if(!$('#viewerModal').classList.contains('hidden')&&e.key==='ArrowLeft')$('#prevImage').click();if(!$('#viewerModal').classList.contains('hidden')&&e.key==='ArrowRight')$('#nextImage').click();if(!$('#viewerModal').classList.contains('hidden')&&e.key.toLowerCase()==='r')rotateImage(e.shiftKey?-90:90);});
renderRows();updateSummaries();

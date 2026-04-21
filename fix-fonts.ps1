$files = Get-ChildItem -Recurse -Path "src" -Include "*.tsx","*.ts"
foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw -Encoding UTF8
    if ($content -match "Playfair Display") {
        $newContent = $content -replace "'Playfair Display', serif", "'DM Serif Display', Georgia, serif"
        $newContent = $newContent -replace "'Playfair Display',serif", "'DM Serif Display', Georgia, serif"
        $newContent = $newContent -replace '"Playfair Display", serif', '"DM Serif Display", Georgia, serif'
        Set-Content $f.FullName $newContent -Encoding UTF8
        Write-Host "Updated: $($f.Name)"
    }
}
Write-Host "Done."
